import { assert } from '../../util/assert.js';
import { Deferred } from '../../util/Deferred.js';
import { ProtocolError, TimeoutError } from '../Errors.js';
import { EventEmitter } from '../EventEmitter.js';
import { getPageContent, setPageContent, waitWithTimeout } from '../util.js';
import { Realm } from './Realm.js';
/**
 * @internal
 */
export const lifeCycleToSubscribedEvent = new Map([
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
export class CDPSessionWrapper extends EventEmitter {
    #context;
    #sessionId = Deferred.create();
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
/**
 * @internal
 */
export class BrowsingContext extends Realm {
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
        return new Realm(this.connection, this.#id, sandbox);
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
            const { result } = await waitWithTimeout(this.connection.send('browsingContext.navigate', {
                url: url,
                context: this.#id,
                wait: readinessState,
            }), 'Navigation', timeout);
            this.#url = result.url;
            return result.navigation;
        }
        catch (error) {
            if (error instanceof ProtocolError) {
                error.message += ` at ${url}`;
            }
            else if (error instanceof TimeoutError) {
                error.message = 'Navigation timeout of ' + timeout + ' ms exceeded';
            }
            throw error;
        }
    }
    async reload(options = {}) {
        const { waitUntil = 'load', timeout = this.#timeoutSettings.navigationTimeout(), } = options;
        const readinessState = lifeCycleToReadinessState.get(getWaitUntilSingle(waitUntil));
        await waitWithTimeout(this.connection.send('browsingContext.reload', {
            context: this.#id,
            wait: readinessState,
        }), 'Navigation', timeout);
    }
    async setContent(html, options) {
        const { waitUntil = 'load', timeout = this.#timeoutSettings.navigationTimeout(), } = options;
        const waitUntilEvent = lifeCycleToSubscribedEvent.get(getWaitUntilSingle(waitUntil));
        await Promise.all([
            setPageContent(this, html),
            waitWithTimeout(new Promise(resolve => {
                this.once(waitUntilEvent, () => {
                    resolve();
                });
            }), waitUntilEvent, timeout),
        ]);
    }
    async content() {
        return await this.evaluate(getPageContent);
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
/**
 * @internal
 */
export function getWaitUntilSingle(event) {
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
    assert(waitUntilSingle, `Invalid waitUntil option ${waitUntilSingle}`);
    return waitUntilSingle;
}
//# sourceMappingURL=BrowsingContext.js.map