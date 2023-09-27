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
import { EventEmitter } from '../common/EventEmitter.js';
import { Awaitable, HandleFor, NodeFor } from '../common/types.js';
import { ClickOptions } from './ElementHandle.js';
import type { Frame } from './Frame.js';
import type { Page } from './Page.js';
/**
 * @public
 */
export type VisibilityOption = 'hidden' | 'visible' | null;
/**
 * @public
 */
export interface LocatorOptions {
    /**
     * Whether to wait for the element to be `visible` or `hidden`. `null` to
     * disable visibility checks.
     */
    visibility: VisibilityOption;
    /**
     * Total timeout for the entire locator operation.
     *
     * Pass `0` to disable timeout.
     *
     * @defaultValue `Page.getDefaultTimeout()`
     */
    timeout: number;
    /**
     * Whether to scroll the element into viewport if not in the viewprot already.
     * @defaultValue `true`
     */
    ensureElementIsInTheViewport: boolean;
    /**
     * Whether to wait for input elements to become enabled before the action.
     * Applicable to `click` and `fill` actions.
     * @defaultValue `true`
     */
    waitForEnabled: boolean;
    /**
     * Whether to wait for the element's bounding box to be same between two
     * animation frames.
     * @defaultValue `true`
     */
    waitForStableBoundingBox: boolean;
}
/**
 * @internal
 */
export type ActionCondition<T> = (element: HandleFor<T>, signal: AbortSignal) => Promise<void>;
/**
 * @public
 */
export type Predicate<From, To extends From = From> = ((value: From) => value is To) | ((value: From) => Awaitable<boolean>);
/**
 * @public
 */
export interface ActionOptions {
    signal?: AbortSignal;
}
/**
 * @public
 */
export type LocatorClickOptions = ClickOptions & ActionOptions;
/**
 * @public
 */
export interface LocatorScrollOptions extends ActionOptions {
    scrollTop?: number;
    scrollLeft?: number;
}
/**
 * All the events that a locator instance may emit.
 *
 * @public
 */
export declare enum LocatorEmittedEvents {
    /**
     * Emitted every time before the locator performs an action on the located element(s).
     */
    Action = "action"
}
/**
 * @public
 */
export interface LocatorEventObject {
    [LocatorEmittedEvents.Action]: never;
}
type UnionLocatorOf<T> = T extends Array<Locator<infer S>> ? S : never;
/**
 * Locators describe a strategy of locating elements and performing an action on
 * them. If the action fails because the element is not ready for the action,
 * the whole operation is retried. Various preconditions for a successful action
 * are checked automatically.
 *
 * @public
 */
export declare abstract class Locator<T> extends EventEmitter {
    /**
     * Used for nominally typing {@link Locator}.
     */
    _?: T;
    /**
     * @internal
     */
    static create<Selector extends string>(pageOrFrame: Page | Frame, selector: Selector): Locator<NodeFor<Selector>>;
    /**
     * Creates a race between multiple locators but ensures that only a single one
     * acts.
     */
    static race<Locators extends Array<Locator<unknown>>>(locators: Locators): Locator<UnionLocatorOf<Locators>>;
    /**
     * Creates an expectation that is evaluated against located values.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @internal
     */
    expect<S extends T>(predicate: Predicate<T, S>): Locator<S>;
    on<K extends keyof LocatorEventObject>(eventName: K, handler: (event: LocatorEventObject[K]) => void): this;
    once<K extends keyof LocatorEventObject>(eventName: K, handler: (event: LocatorEventObject[K]) => void): this;
    off<K extends keyof LocatorEventObject>(eventName: K, handler: (event: LocatorEventObject[K]) => void): this;
    abstract setVisibility(visibility: VisibilityOption): this;
    abstract setTimeout(timeout: number): this;
    abstract setEnsureElementIsInTheViewport(value: boolean): this;
    abstract setWaitForEnabled(value: boolean): this;
    abstract setWaitForStableBoundingBox(value: boolean): this;
    abstract click<ElementType extends Element>(this: Locator<ElementType>, options?: Readonly<LocatorClickOptions>): Promise<void>;
    /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. contenteditable, selector, inputs are
     * supported.
     */
    abstract fill<ElementType extends Element>(this: Locator<ElementType>, value: string, options?: Readonly<ActionOptions>): Promise<void>;
    abstract hover<ElementType extends Element>(this: Locator<ElementType>, options?: Readonly<ActionOptions>): Promise<void>;
    abstract scroll<ElementType extends Element>(this: Locator<ElementType>, options?: Readonly<LocatorScrollOptions>): Promise<void>;
}
/**
 * @internal
 */
export declare class NodeLocator<T extends Node> extends Locator<T> {
    #private;
    constructor(pageOrFrame: Page | Frame, selector: string);
    setVisibility(visibility: VisibilityOption): this;
    setTimeout(timeout: number): this;
    setEnsureElementIsInTheViewport(value: boolean): this;
    setWaitForEnabled(value: boolean): this;
    setWaitForStableBoundingBox(value: boolean): this;
    click<ElementType extends Element>(this: NodeLocator<ElementType>, options?: Readonly<LocatorClickOptions>): Promise<void>;
    /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. contenteditable, selector, inputs are
     * supported.
     */
    fill<ElementType extends Element>(this: NodeLocator<ElementType>, value: string, options?: Readonly<ActionOptions>): Promise<void>;
    hover<ElementType extends Element>(this: NodeLocator<ElementType>, options?: Readonly<ActionOptions>): Promise<void>;
    scroll<ElementType extends Element>(this: NodeLocator<ElementType>, options?: Readonly<LocatorScrollOptions>): Promise<void>;
}
export {};
//# sourceMappingURL=Locator.d.ts.map