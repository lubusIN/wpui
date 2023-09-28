"use strict";
/**
 * Copyright 2023 Google Inc. All rights reserved.
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
exports.NodeLocator = exports.Locator = exports.LocatorEmittedEvents = void 0;
const Errors_js_1 = require("../common/Errors.js");
const EventEmitter_js_1 = require("../common/EventEmitter.js");
const util_js_1 = require("../common/util.js");
const ErrorLike_js_1 = require("../util/ErrorLike.js");
const LOCATOR_CONTEXTS = new WeakMap();
/**
 * Timeout for individual operations inside the locator. On errors the
 * operation is retried as long as {@link Locator.setTimeout} is not
 * exceeded. This timeout should be generally much lower as locating an
 * element means multiple asynchronious operations.
 */
const CONDITION_TIMEOUT = 1000;
const WAIT_FOR_FUNCTION_DELAY = 100;
/**
 * All the events that a locator instance may emit.
 *
 * @public
 */
var LocatorEmittedEvents;
(function (LocatorEmittedEvents) {
    /**
     * Emitted every time before the locator performs an action on the located element(s).
     */
    LocatorEmittedEvents["Action"] = "action";
})(LocatorEmittedEvents || (exports.LocatorEmittedEvents = LocatorEmittedEvents = {}));
/**
 * Locators describe a strategy of locating elements and performing an action on
 * them. If the action fails because the element is not ready for the action,
 * the whole operation is retried. Various preconditions for a successful action
 * are checked automatically.
 *
 * @public
 */
class Locator extends EventEmitter_js_1.EventEmitter {
    /**
     * @internal
     */
    static create(pageOrFrame, selector) {
        return new NodeLocator(pageOrFrame, selector).setTimeout('getDefaultTimeout' in pageOrFrame
            ? pageOrFrame.getDefaultTimeout()
            : pageOrFrame.page().getDefaultTimeout());
    }
    /**
     * Creates a race between multiple locators but ensures that only a single one
     * acts.
     */
    static race(locators) {
        return new RaceLocator(locators);
    }
    /**
     * Creates an expectation that is evaluated against located values.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @internal
     */
    expect(predicate) {
        return new ExpectedLocator(this, predicate);
    }
    on(eventName, handler) {
        return super.on(eventName, handler);
    }
    once(eventName, handler) {
        return super.once(eventName, handler);
    }
    off(eventName, handler) {
        return super.off(eventName, handler);
    }
}
exports.Locator = Locator;
/**
 * @internal
 */
class NodeLocator extends Locator {
    #pageOrFrame;
    #selector;
    #visibility = 'visible';
    #timeout = 30000;
    #ensureElementIsInTheViewport = true;
    #waitForEnabled = true;
    #waitForStableBoundingBox = true;
    constructor(pageOrFrame, selector) {
        super();
        this.#pageOrFrame = pageOrFrame;
        this.#selector = selector;
    }
    setVisibility(visibility) {
        this.#visibility = visibility;
        return this;
    }
    setTimeout(timeout) {
        this.#timeout = timeout;
        return this;
    }
    setEnsureElementIsInTheViewport(value) {
        this.#ensureElementIsInTheViewport = value;
        return this;
    }
    setWaitForEnabled(value) {
        this.#waitForEnabled = value;
        return this;
    }
    setWaitForStableBoundingBox(value) {
        this.#waitForStableBoundingBox = value;
        return this;
    }
    /**
     * Retries the `fn` until a truthy result is returned.
     */
    async #waitForFunction(fn, signal, timeout = CONDITION_TIMEOUT) {
        let isActive = true;
        let controller;
        // If the loop times out, we abort only the last iteration's controller.
        const timeoutId = timeout
            ? setTimeout(() => {
                isActive = false;
                controller?.abort();
            }, timeout)
            : 0;
        // If the user's signal aborts, we abort the last iteration and the loop.
        signal?.addEventListener('abort', () => {
            controller?.abort();
            isActive = false;
            clearTimeout(timeoutId);
        }, { once: true });
        while (isActive) {
            controller = new AbortController();
            try {
                const result = await fn(controller.signal);
                if (result) {
                    clearTimeout(timeoutId);
                    return;
                }
            }
            catch (err) {
                if ((0, ErrorLike_js_1.isErrorLike)(err)) {
                    (0, util_js_1.debugError)(err);
                    // Retry on all timeouts.
                    if (err instanceof Errors_js_1.TimeoutError) {
                        continue;
                    }
                    // Abort error are ignored as they only affect one iteration.
                    if (err.name === 'AbortError') {
                        continue;
                    }
                }
                throw err;
            }
            finally {
                // We abort any operations that might have been started by `fn`, because
                // the iteration is now over.
                controller.abort();
            }
            await new Promise(resolve => {
                return setTimeout(resolve, WAIT_FOR_FUNCTION_DELAY);
            });
        }
        signal?.throwIfAborted();
        throw new Errors_js_1.TimeoutError(`waitForFunction timed out. The timeout is ${timeout}ms.`);
    }
    /**
     * Checks if the element is in the viewport and auto-scrolls it if it is not.
     */
    #ensureElementIsInTheViewportIfNeeded = async (element, signal) => {
        if (!this.#ensureElementIsInTheViewport) {
            return;
        }
        // Side-effect: this also checks if it is connected.
        const isIntersectingViewport = await element.isIntersectingViewport({
            threshold: 0,
        });
        signal?.throwIfAborted();
        if (!isIntersectingViewport) {
            await element.scrollIntoView();
            signal?.throwIfAborted();
            await this.#waitForFunction(async () => {
                return await element.isIntersectingViewport({
                    threshold: 0,
                });
            }, signal);
            signal?.throwIfAborted();
        }
    };
    /**
     * Waits for the element to become visible or hidden. visibility === 'visible'
     * means that the element has a computed style, the visibility property other
     * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
     * 'hidden' means the opposite of that.
     */
    #waitForVisibilityIfNeeded = async (element, signal) => {
        if (this.#visibility === null) {
            return;
        }
        if (this.#visibility === 'hidden') {
            await this.#waitForFunction(async () => {
                return element.isHidden();
            }, signal);
        }
        await this.#waitForFunction(async () => {
            return element.isVisible();
        }, signal);
    };
    /**
     * If the element has a "disabled" property, wait for the element to be
     * enabled.
     */
    #waitForEnabledIfNeeded = async (element, signal) => {
        if (!this.#waitForEnabled) {
            return;
        }
        await this.#pageOrFrame.waitForFunction(el => {
            if ('disabled' in el && typeof el.disabled === 'boolean') {
                return !el.disabled;
            }
            return true;
        }, {
            timeout: CONDITION_TIMEOUT,
            signal,
        }, element);
    };
    /**
     * Compares the bounding box of the element for two consecutive animation
     * frames and waits till they are the same.
     */
    #waitForStableBoundingBoxIfNeeded = async (element, signal) => {
        if (!this.#waitForStableBoundingBox) {
            return;
        }
        function getClientRect() {
            return element.evaluate(el => {
                return new Promise(resolve => {
                    window.requestAnimationFrame(() => {
                        const rect1 = el.getBoundingClientRect();
                        window.requestAnimationFrame(() => {
                            const rect2 = el.getBoundingClientRect();
                            resolve([
                                {
                                    x: rect1.x,
                                    y: rect1.y,
                                    width: rect1.width,
                                    height: rect1.height,
                                },
                                {
                                    x: rect2.x,
                                    y: rect2.y,
                                    width: rect2.width,
                                    height: rect2.height,
                                },
                            ]);
                        });
                    });
                });
            });
        }
        await this.#waitForFunction(async () => {
            const [rect1, rect2] = await getClientRect();
            return (rect1.x === rect2.x &&
                rect1.y === rect2.y &&
                rect1.width === rect2.width &&
                rect1.height === rect2.height);
        }, signal);
    };
    #run(action, signal, conditions = []) {
        const globalConditions = [
            ...(LOCATOR_CONTEXTS.get(this)?.conditions?.values() ?? []),
        ];
        const allConditions = conditions.concat(globalConditions);
        return this.#waitForFunction(async (signal) => {
            // 1. Select the element without visibility checks.
            const element = (await this.#pageOrFrame.waitForSelector(this.#selector, {
                visible: false,
                timeout: this.#timeout,
                signal,
            }));
            // Retry if no element is found.
            if (!element) {
                return false;
            }
            try {
                signal?.throwIfAborted();
                // 2. Perform action specific checks.
                await Promise.all(allConditions.map(check => {
                    return check(element, signal);
                }));
                signal?.throwIfAborted();
                // 3. Perform the action
                this.emit(LocatorEmittedEvents.Action);
                await action(element);
                return true;
            }
            finally {
                void element.dispose().catch(util_js_1.debugError);
            }
        }, signal, this.#timeout);
    }
    async click(options) {
        return await this.#run(async (element) => {
            await element.click(options);
        }, options?.signal, [
            this.#ensureElementIsInTheViewportIfNeeded,
            this.#waitForVisibilityIfNeeded,
            this.#waitForEnabledIfNeeded,
            this.#waitForStableBoundingBoxIfNeeded,
        ]);
    }
    /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. contenteditable, selector, inputs are
     * supported.
     */
    fill(value, options) {
        return this.#run(async (element) => {
            const input = element;
            const inputType = await input.evaluate(el => {
                if (el instanceof HTMLSelectElement) {
                    return 'select';
                }
                if (el instanceof HTMLInputElement) {
                    if (new Set([
                        'textarea',
                        'text',
                        'url',
                        'tel',
                        'search',
                        'password',
                        'number',
                        'email',
                    ]).has(el.type)) {
                        return 'typeable-input';
                    }
                    else {
                        return 'other-input';
                    }
                }
                if (el.isContentEditable) {
                    return 'contenteditable';
                }
                return 'unknown';
            });
            switch (inputType) {
                case 'select':
                    await input.select(value);
                    break;
                case 'contenteditable':
                case 'typeable-input':
                    const textToType = await input.evaluate((input, newValue) => {
                        const currentValue = input.isContentEditable
                            ? input.innerText
                            : input.value;
                        // Clear the input if the current value does not match the filled
                        // out value.
                        if (newValue.length <= currentValue.length ||
                            !newValue.startsWith(input.value)) {
                            if (input.isContentEditable) {
                                input.innerText = '';
                            }
                            else {
                                input.value = '';
                            }
                            return newValue;
                        }
                        const originalValue = input.isContentEditable
                            ? input.innerText
                            : input.value;
                        // If the value is partially filled out, only type the rest. Move
                        // cursor to the end of the common prefix.
                        if (input.isContentEditable) {
                            input.innerText = '';
                            input.innerText = originalValue;
                        }
                        else {
                            input.value = '';
                            input.value = originalValue;
                        }
                        return newValue.substring(originalValue.length);
                    }, value);
                    await input.type(textToType);
                    break;
                case 'other-input':
                    await input.focus();
                    await input.evaluate((input, value) => {
                        input.value = value;
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }, value);
                    break;
                case 'unknown':
                    throw new Error(`Element cannot be filled out.`);
            }
        }, options?.signal, [
            this.#ensureElementIsInTheViewportIfNeeded,
            this.#waitForVisibilityIfNeeded,
            this.#waitForEnabledIfNeeded,
            this.#waitForStableBoundingBoxIfNeeded,
        ]);
    }
    hover(options) {
        return this.#run(async (element) => {
            await element.hover();
        }, options?.signal, [
            this.#ensureElementIsInTheViewportIfNeeded,
            this.#waitForVisibilityIfNeeded,
            this.#waitForStableBoundingBoxIfNeeded,
        ]);
    }
    scroll(options) {
        return this.#run(async (element) => {
            await element.evaluate((el, scrollTop, scrollLeft) => {
                if (scrollTop !== undefined) {
                    el.scrollTop = scrollTop;
                }
                if (scrollLeft !== undefined) {
                    el.scrollLeft = scrollLeft;
                }
            }, options?.scrollTop, options?.scrollLeft);
        }, options?.signal, [
            this.#ensureElementIsInTheViewportIfNeeded,
            this.#waitForVisibilityIfNeeded,
            this.#waitForStableBoundingBoxIfNeeded,
        ]);
    }
}
exports.NodeLocator = NodeLocator;
class ExpectedLocator extends Locator {
    #base;
    #predicate;
    constructor(base, predicate) {
        super();
        this.#base = base;
        this.#predicate = predicate;
    }
    setVisibility(visibility) {
        this.#base.setVisibility(visibility);
        return this;
    }
    setTimeout(timeout) {
        this.#base.setTimeout(timeout);
        return this;
    }
    setEnsureElementIsInTheViewport(value) {
        this.#base.setEnsureElementIsInTheViewport(value);
        return this;
    }
    setWaitForEnabled(value) {
        this.#base.setWaitForEnabled(value);
        return this;
    }
    setWaitForStableBoundingBox(value) {
        this.#base.setWaitForStableBoundingBox(value);
        return this;
    }
    #condition = async (handle, signal) => {
        // TODO(jrandolf): We should remove this once JSHandle has waitForFunction.
        await handle.frame.waitForFunction(this.#predicate, { signal }, handle);
    };
    #insertFilterCondition() {
        const context = (LOCATOR_CONTEXTS.get(this.#base) ??
            {});
        context.conditions ??= new Set();
        context.conditions.add(this.#condition);
        LOCATOR_CONTEXTS.set(this.#base, context);
    }
    click(options) {
        this.#insertFilterCondition();
        return this.#base.click(options);
    }
    fill(value, options) {
        this.#insertFilterCondition();
        return this.#base.fill(value, options);
    }
    hover(options) {
        this.#insertFilterCondition();
        return this.#base.hover(options);
    }
    scroll(options) {
        this.#insertFilterCondition();
        return this.#base.scroll(options);
    }
}
/**
 * @internal
 */
class RaceLocator extends Locator {
    #locators;
    constructor(locators) {
        super();
        this.#locators = locators;
    }
    setVisibility(visibility) {
        for (const locator of this.#locators) {
            locator.setVisibility(visibility);
        }
        return this;
    }
    setTimeout(timeout) {
        for (const locator of this.#locators) {
            locator.setTimeout(timeout);
        }
        return this;
    }
    setEnsureElementIsInTheViewport(value) {
        for (const locator of this.#locators) {
            locator.setEnsureElementIsInTheViewport(value);
        }
        return this;
    }
    setWaitForEnabled(value) {
        for (const locator of this.#locators) {
            locator.setWaitForEnabled(value);
        }
        return this;
    }
    setWaitForStableBoundingBox(value) {
        for (const locator of this.#locators) {
            locator.setWaitForStableBoundingBox(value);
        }
        return this;
    }
    async #run(action, signal) {
        const abortControllers = new WeakMap();
        // Abort all locators if the user-provided signal aborts.
        signal?.addEventListener('abort', () => {
            for (const locator of this.#locators) {
                abortControllers.get(locator)?.abort();
            }
        });
        const handleLocatorAction = (locator) => {
            return () => {
                // When one locator is ready to act, we will abort other locators.
                for (const other of this.#locators) {
                    if (other !== locator) {
                        abortControllers.get(other)?.abort();
                    }
                }
                this.emit(LocatorEmittedEvents.Action);
            };
        };
        const createAbortController = (locator) => {
            const abortController = new AbortController();
            abortControllers.set(locator, abortController);
            return abortController;
        };
        const results = await Promise.allSettled(this.#locators.map(locator => {
            return action(locator.on(LocatorEmittedEvents.Action, handleLocatorAction(locator)), createAbortController(locator).signal);
        }));
        signal?.throwIfAborted();
        const rejected = results.filter((result) => {
            return result.status === 'rejected';
        });
        // If some locators are fulfilled, do not throw.
        if (rejected.length !== results.length) {
            return;
        }
        for (const result of rejected) {
            const reason = result.reason;
            // AbortError is be an expected result of a race.
            if ((0, ErrorLike_js_1.isErrorLike)(reason) && reason.name === 'AbortError') {
                continue;
            }
            throw reason;
        }
    }
    async click(options) {
        return await this.#run((locator, signal) => {
            return locator.click({ ...options, signal });
        }, options?.signal);
    }
    async fill(value, options) {
        return await this.#run((locator, signal) => {
            return locator.fill(value, { ...options, signal });
        }, options?.signal);
    }
    async hover(options) {
        return await this.#run((locator, signal) => {
            return locator.hover({ ...options, signal });
        }, options?.signal);
    }
    async scroll(options) {
        return await this.#run((locator, signal) => {
            return locator.scroll({ ...options, signal });
        }, options?.signal);
    }
}
//# sourceMappingURL=Locator.js.map