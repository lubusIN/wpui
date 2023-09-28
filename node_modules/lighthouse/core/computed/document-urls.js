/**
 * @license Copyright 2023 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {NetworkAnalyzer} from '../lib/dependency-graph/simulator/network-analyzer.js';
import {makeComputedArtifact} from './computed-artifact.js';
import {NetworkRecords} from './network-records.js';
import {ProcessedTrace} from './processed-trace.js';

/**
 * @fileoverview Compute the navigation specific URLs `requestedUrl` and `mainDocumentUrl` in situations where
 * the `URL` artifact is not present. This is not a drop-in replacement for `URL` but can be helpful in situations
 * where getting the `URL` artifact is difficult.
 */

class DocumentUrls {
  /**
   * @param {{trace: LH.Trace, devtoolsLog: LH.DevtoolsLog}} data
   * @param {LH.Artifacts.ComputedContext} context
   * @return {Promise<{requestedUrl: string, mainDocumentUrl: string}>}
   */
  static async compute_(data, context) {
    const processedTrace = await ProcessedTrace.request(data.trace, context);
    const networkRecords = await NetworkRecords.request(data.devtoolsLog, context);

    const mainFrameId = processedTrace.mainFrameInfo.frameId;

    /** @type {string|undefined} */
    let requestedUrl;
    /** @type {string|undefined} */
    let mainDocumentUrl;
    for (const event of data.devtoolsLog) {
      if (event.method === 'Page.frameNavigated' && event.params.frame.id === mainFrameId) {
        const {url} = event.params.frame;
        // Only set requestedUrl on the first main frame navigation.
        if (!requestedUrl) requestedUrl = url;
        mainDocumentUrl = url;
      }
    }
    if (!requestedUrl || !mainDocumentUrl) throw new Error('No main frame navigations found');

    const initialRequest = NetworkAnalyzer.findResourceForUrl(networkRecords, requestedUrl);
    if (initialRequest?.redirects?.length) requestedUrl = initialRequest.redirects[0].url;

    return {requestedUrl, mainDocumentUrl};
  }
}

const DocumentUrlsComputed = makeComputedArtifact(DocumentUrls, ['devtoolsLog', 'trace']);
export {DocumentUrlsComputed as DocumentUrls};

