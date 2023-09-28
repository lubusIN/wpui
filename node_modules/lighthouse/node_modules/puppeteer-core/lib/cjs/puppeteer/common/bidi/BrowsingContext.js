"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWaitUntilSingle = exports.BrowsingContext = exports.CDPSessionWrapper = exports.lifeCycleToSubscribedEvent = void 0;
const assert_js_1 = require("../../util/assert.js");
const Deferred_js_1 = require("../../util/Deferred.js");
const Errors_js_1 = require("../Errors.js");
const EventEmitter_js_1 = require("../EventEmitter.js");
const util_js_1 = require("../util.js");
const Realm_js_1 = require("./Realm.js");
/**
 * @internal
 */
exports.lifeCycleToSubscribedEvent = new Map([
    ['load', 'browsingContext.load'],
    ['domcontentloaded', 'browsingContext.domContentLoaded'],
]);
/**
 * @internal
 */
const lifeCycleToReadinessState = new Map([
    ['load', 'complete'],
    ['domcontentloaded', 'interactive'],
]);
/**
 * @internal
 */
class CDPSessionWrapper extends EventEmitter_js_1.EventEmitter {
    #context;
    #sessionId = Deferred_js_1.Deferred.create();
    constructor(context) {
        super();
        this.#context = context;
        context.connection
            .send('cdp.getSession', {
            context: context.id,
        })
            .then(session => {
            this.#sessionId.resolve(session.result.session);
        })
            .catch(err => {
            this.#sessionId.reject(err);
        });
    }
    connection() {
        return undefined;
    }
    async send(method, ...paramArgs) {
        const session = await this.#sessionId.valueOrThrow();
        const result = await this.#context.connection.send('cdp.sendCommand', {
            method: method,
            params: paramArgs[0],
            session,
        });
        return result.result;
    }
    detach() {
        throw new Error('Method not implemented.');
    }
    id() {
        const val = this.#sessionId.value();
        return val instanceof Error || val === undefined ? '' : val;
    }
}
exports.CDPSessionWrapper = CDPSessionWrapper;
/**
 * @internal
 */
class BrowsingContext extends Realm_js_1.Realm {
    #timeoutSettings;
    #id;
    #url;
    #cdpSession;
    constructor(connection, timeoutSettings, info) {
        super(connection, info.context);
        this.connection = connection;
        this.#timeoutSettings = timeoutSettings;
        this.#id = info.context;
        this.#url = info.url;
        this.#cdpSession = new CDPSessionWrapper(this);
        this.on('browsingContext.fragmentNavigated', (info) => {
            this.#url = info.url;
        });
    }
    createSandboxRealm(sandbox) {
        return new Realm_js_1.Realm(this.connection, this.#id, sandbox);
    }
    get url() {
        return this.#url;
    }
    get id() {
        return this.#id;
    }
    get cdpSession() {
        return this.#cdpSession;
    }
    navigated(url) {
        this.#url = url;
    }
    async goto(url, options = {}) {
        const { waitUntil = 'load', timeout = this.#timeoutSettings.navigationTimeout(), } = options;
        const readinessState = lifeCycleToReadinessState.get(getWaitUntilSingle(waitUntil));
        try {
            const { result } = await (0, util_js_1.waitWithTimeout)(this.connection.send('browsingContext.navigate', {
                url: url,
                context: this.#id,
                wait: readinessState,
            }), 'Navigation', timeout);
            this.#url = result.url;
            return result.navigation;
        }
        catch (error) {
            if (error instanceof Errors_js_1.ProtocolError) {
                error.message += ` at ${url}`;
            }
            else if (error instanceof Errors_js_1.TimeoutError) {
                error.message = 'Navigation timeout of ' + timeout + ' ms exceeded';
            }
            throw error;
        }
    }
    async reload(options = {}) {
        const { waitUntil = 'load', timeout = this.#timeoutSettings.navigationTimeout(), } = options;
        const readinessState = lifeCycleToReadinessState.get(getWaitUntilSingle(waitUntil));
        await (0, util_js_1.waitWithTimeout)(this.connection.send('browsingContext.reload', {
            context: this.#id,
            wait: readinessState,
        }), 'Navigation', timeout);
    }
    async setContent(html, options) {
        const { waitUntil = 'load', timeout = this.#timeoutSettings.navigationTimeout(), } = options;
        const waitUntilEvent = exports.lifeCycleToSubscribedEvent.get(getWaitUntilSingle(waitUntil));
        await Promise.all([
            (0, util_js_1.setPageContent)(this, html),
            (0, util_js_1.waitWithTimeout)(new Promise(resolve => {
                this.once(waitUntilEvent, () => {
                    resolve();
                });
            }), waitUntilEvent, timeout),
        ]);
    }
    async content() {
        return await this.evaluate(util_js_1.getPageContent);
    }
    async sendCDPCommand(method, ...paramArgs) {
        return this.#cdpSession.send(method, ...paramArgs);
    }
    title() {
        return this.evaluate(() => {
            return document.title;
        });
    }
    dispose() {
        this.removeAllListeners();
        this.connection.unregisterBrowsingContexts(this.#id);
    }
}
exports.BrowsingContext = BrowsingContext;
/**
 * @internal
 */
function getWaitUntilSingle(event) {
    if (Array.isArray(event) && event.length > 1) {
        throw new Error('BiDi support only single `waitUntil` argument');
    }
    const waitUntilSingle = Array.isArray(event)
        ? event.find(lifecycle => {
            return lifecycle === 'domcontentloaded' || lifecycle === 'load';
        })
        : event;
    if (waitUntilSingle === 'networkidle0' ||
        waitUntilSingle === 'networkidle2') {
        throw new Error(`BiDi does not support 'waitUntil' ${waitUntilSingle}`);
    }
    (0, assert_js_1.assert)(waitUntilSingle, `Invalid waitUntil option ${waitUntilSingle}`);
    return waitUntilSingle;
}
exports.getWaitUntilSingle = getWaitUntilSingle;
//# sourceMappingURL=BrowsingContext.js.map