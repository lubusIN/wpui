"use strict";
/**
 * Copyright 2022 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
const Browser_js_1 = require("../../api/Browser.js");
const BrowserContext_js_1 = require("./BrowserContext.js");
const utils_js_1 = require("./utils.js");
/**
 * @internal
 */
class Browser extends Browser_js_1.Browser {
    static subscribeModules = [
        'browsingContext',
        'network',
        'log',
    ];
    static subscribeCdpEvents = [
        // Coverage
        'cdp.Debugger.scriptParsed',
        'cdp.CSS.styleSheetAdded',
        'cdp.Runtime.executionContextsCleared',
        // Tracing
        'cdp.Tracing.tracingComplete',
    ];
    #browserName = '';
    #browserVersion = '';
    static async create(opts) {
        let browserName = '';
        let browserVersion = '';
        // TODO: await until the connection is established.
        try {
            const { result } = await opts.connection.send('session.new', {
                capabilities: {
                    alwaysMatch: {
                        acceptInsecureCerts: opts.ignoreHTTPSErrors,
                    },
                },
            });
            browserName = result.capabilities.browserName ?? '';
            browserVersion = result.capabilities.browserVersion ?? '';
        }
        catch (err) {
            // Chrome does not support session.new.
            (0, utils_js_1.debugError)(err);
        }
        await opts.connection.send('session.subscribe', {
            events: browserName.toLocaleLowerCase().includes('firefox')
                ? Browser.subscribeModules
                : [...Browser.subscribeModules, ...Browser.subscribeCdpEvents],
        });
        return new Browser({
            ...opts,
            browserName,
            browserVersion,
        });
    }
    #process;
    #closeCallback;
    #connection;
    #defaultViewport;
    #defaultContext;
    constructor(opts) {
        super();
        this.#process = opts.process;
        this.#closeCallback = opts.closeCallback;
        this.#connection = opts.connection;
        this.#defaultViewport = opts.defaultViewport;
        this.#browserName = opts.browserName;
        this.#browserVersion = opts.browserVersion;
        this.#process?.once('close', () => {
            this.#connection.dispose();
            this.emit("disconnected" /* BrowserEmittedEvents.Disconnected */);
        });
        this.#defaultContext = new BrowserContext_js_1.BrowserContext(this, {
            defaultViewport: this.#defaultViewport,
            isDefault: true,
        });
    }
    get connection() {
        return this.#connection;
    }
    wsEndpoint() {
        return this.#connection.url;
    }
    async close() {
        if (this.#connection.closed) {
            return;
        }
        // TODO: implement browser.close.
        // await this.#connection.send('browser.close', {});
        this.#connection.dispose();
        await this.#closeCallback?.call(null);
    }
    isConnected() {
        return !this.#connection.closed;
    }
    process() {
        return this.#process ?? null;
    }
    async createIncognitoBrowserContext(_options) {
        // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
        return new BrowserContext_js_1.BrowserContext(this, {
            defaultViewport: this.#defaultViewport,
            isDefault: false,
        });
    }
    async version() {
        return `${this.#browserName}/${this.#browserVersion}`;
    }
    /**
     * Returns an array of all open browser contexts. In a newly created browser, this will
     * return a single instance of {@link BrowserContext}.
     */
    browserContexts() {
        // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
        return [this.#defaultContext];
    }
    /**
     * Returns the default browser context. The default browser context cannot be closed.
     */
    defaultBrowserContext() {
        return this.#defaultContext;
    }
    newPage() {
        return this.#defaultContext.newPage();
    }
}
exports.Browser = Browser;
//# sourceMappingURL=Browser.js.map