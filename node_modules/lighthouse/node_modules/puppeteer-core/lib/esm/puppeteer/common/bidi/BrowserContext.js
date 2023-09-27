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
import { BrowserContext as BrowserContextBase } from '../../api/BrowserContext.js';
import { Deferred } from '../../util/Deferred.js';
import { Page } from './Page.js';
import { debugError } from './utils.js';
/**
 * @internal
 */
export class BrowserContext extends BrowserContextBase {
    #browser;
    #connection;
    #defaultViewport;
    #pages = new Map();
    #onContextDestroyedBind = this.#onContextDestroyed.bind(this);
    #init = Deferred.create();
    #isDefault = false;
    constructor(browser, options) {
        super();
        this.#browser = browser;
        this.#connection = this.#browser.connection;
        this.#defaultViewport = options.defaultViewport;
        this.#connection.on('browsingContext.contextDestroyed', this.#onContextDestroyedBind);
        this.#isDefault = options.isDefault;
        this.#getTree().catch(debugError);
    }
    get connection() {
        return this.#connection;
    }
    async #getTree() {
        if (!this.#isDefault) {
            this.#init.resolve();
            return;
        }
        try {
            const { result } = await this.#connection.send('browsingContext.getTree', {});
            for (const context of result.contexts) {
                const page = new Page(this, context);
                this.#pages.set(context.context, page);
            }
            this.#init.resolve();
        }
        catch (err) {
            this.#init.reject(err);
        }
    }
    async #onContextDestroyed(event) {
        const page = this.#pages.get(event.context);
        await page?.close().catch(error => {
            debugError(error);
        });
        this.#pages.delete(event.context);
    }
    async newPage() {
        await this.#init.valueOrThrow();
        const { result } = await this.#connection.send('browsingContext.create', {
            type: 'tab',
        });
        const page = new Page(this, {
            context: result.context,
            children: [],
        });
        if (this.#defaultViewport) {
            try {
                await page.setViewport(this.#defaultViewport);
            }
            catch {
                // No support for setViewport in Firefox.
            }
        }
        this.#pages.set(result.context, page);
        return page;
    }
    async close() {
        await this.#init.valueOrThrow();
        if (this.#isDefault) {
            throw new Error('Default context cannot be closed!');
        }
        for (const page of this.#pages.values()) {
            await page?.close().catch(error => {
                debugError(error);
            });
        }
        this.#pages.clear();
    }
    browser() {
        return this.#browser;
    }
    async pages() {
        await this.#init.valueOrThrow();
        return [...this.#pages.values()];
    }
    isIncognito() {
        return false;
    }
}
//# sourceMappingURL=BrowserContext.js.map