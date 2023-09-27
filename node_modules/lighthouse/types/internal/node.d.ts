/**
 * @license Copyright 2018 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

declare global {
  var isDevtools: boolean | undefined;
  var isLightrider: boolean | undefined;

  // Augment Intl to include
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
  namespace Intl {
    var getCanonicalLocales: (locales?: string | Array<string>) => Array<string>;
  }

  // Some functions defined in node are stringified and run in the browser.
  // Ensure those functions are working with the correct browser environment.
  interface Window {
    // Cached native functions/objects for use in case the page overwrites them.
    // See: `executionContext.cacheNativesOnNewDocument`.
    __nativePromise: PromiseConstructor;
    __nativePerformance: Performance;
    __nativeFetch: typeof fetch,
    __nativeURL: typeof URL;
    __ElementMatches: Element['matches'];
    __HTMLElementBoundingClientRect: HTMLElement['getBoundingClientRect'];

    /** Used for monitoring long tasks in the test page. */
    ____lastLongTask?: number;

    /** Used by FullPageScreenshot gatherer. */
    __lighthouseNodesDontTouchOrAllVarianceGoesAway: Map<Element, string>;
    __lighthouseExecutionContextUniqueIdentifier?: number;

    /** Injected into the page when the `--debug` flag is used. */
    continueLighthouseRun(): void;
  }

  // `fetchPriority` not defined in tsc as of 4.9.4.
  interface HTMLImageElement {
    /**
     * Sets the priority for fetches initiated by the element.
     * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-fetchpriority
     */
    fetchPriority: string;
  }
  interface HTMLLinkElement {
    /**
     * Sets the priority for fetches initiated by the element.
     * @see https://html.spec.whatwg.org/multipage/semantics.html#dom-link-fetchpriority
     */
    fetchPriority: string;
  }
}

export {};
