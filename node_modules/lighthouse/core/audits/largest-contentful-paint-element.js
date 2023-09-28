/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {Audit} from './audit.js';
import * as i18n from '../lib/i18n/i18n.js';
import {LargestContentfulPaint} from '../computed/metrics/largest-contentful-paint.js';
import {LCPBreakdown} from '../computed/metrics/lcp-breakdown.js';

const UIStrings = {
  /** Descriptive title of a diagnostic audit that provides the element that was determined to be the Largest Contentful Paint. */
  title: 'Largest Contentful Paint element',
  /** Description of a Lighthouse audit that tells the user that the element shown was determined to be the Largest Contentful Paint. */
  description: 'This is the largest contentful element painted within the viewport. ' +
    '[Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)',
  /** Label for a column in a data table; entries will be the name of a phase in the Largest Contentful Paint (LCP) metric. */
  columnPhase: 'Phase',
  /** Label for a column in a data table; entries will be the percent of Largest Contentful Paint (LCP) that a phase covers. */
  columnPercentOfLCP: '% of LCP',
  /** Label for a column in a data table; entries will be the amount of time spent in a phase in the Largest Contentful Paint (LCP) metric. */
  columnTiming: 'Timing',
  /** Table item value for the Time To First Byte (TTFB) phase of the Largest Contentful Paint (LCP) metric. */
  itemTTFB: 'TTFB',
  /** Table item value for the load delay phase of the Largest Contentful Paint (LCP) metric. */
  itemLoadDelay: 'Load Delay',
  /** Table item value for the load time phase of the Largest Contentful Paint (LCP) metric. */
  itemLoadTime: 'Load Time',
  /** Table item value for the render delay phase of the Largest Contentful Paint (LCP) metric. */
  itemRenderDelay: 'Render Delay',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class LargestContentfulPaintElement extends Audit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'largest-contentful-paint-element',
      title: str_(UIStrings.title),
      description: str_(UIStrings.description),
      scoreDisplayMode: Audit.SCORING_MODES.INFORMATIVE,
      supportedModes: ['navigation'],
      requiredArtifacts:
        ['traces', 'TraceElements', 'devtoolsLogs', 'GatherContext', 'settings', 'URL'],
    };
  }

  /**
   * @param {LH.Artifacts.MetricComputationDataInput} metricComputationData
   * @param {LH.Audit.Context} context
   * @return {Promise<number|undefined>}
   */
  static async getOptionalLCPMetric(metricComputationData, context) {
    try {
      const {timing: metricLcp} =
        await LargestContentfulPaint.request(metricComputationData, context);
      return metricLcp;
    } catch {}
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @return {LH.Audit.Details.Table|undefined}
   */
  static makeElementTable(artifacts) {
    const lcpElement = artifacts.TraceElements
      .find(element => element.traceEventType === 'largest-contentful-paint');
    if (!lcpElement) return;

    /** @type {LH.Audit.Details.Table['headings']} */
    const headings = [
      {key: 'node', valueType: 'node', label: str_(i18n.UIStrings.columnElement)},
    ];

    const lcpElementDetails = [{node: Audit.makeNodeItem(lcpElement.node)}];

    return Audit.makeTableDetails(headings, lcpElementDetails);
  }

  /**
   * @param {number} metricLcp
   * @param {LH.Artifacts.MetricComputationDataInput} metricComputationData
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Details.Table>}
   */
  static async makePhaseTable(metricLcp, metricComputationData, context) {
    const {ttfb, loadStart, loadEnd} = await LCPBreakdown.request(metricComputationData, context);

    let loadDelay = 0;
    let loadTime = 0;
    let renderDelay = metricLcp - ttfb;

    if (loadStart && loadEnd) {
      loadDelay = loadStart - ttfb;
      loadTime = loadEnd - loadStart;
      renderDelay = metricLcp - loadEnd;
    }

    const results = [
      {phase: str_(UIStrings.itemTTFB), timing: ttfb},
      {phase: str_(UIStrings.itemLoadDelay), timing: loadDelay},
      {phase: str_(UIStrings.itemLoadTime), timing: loadTime},
      {phase: str_(UIStrings.itemRenderDelay), timing: renderDelay},
    ].map(result => {
      const percent = 100 * result.timing / metricLcp;
      const percentStr = `${percent.toFixed(0)}%`;
      return {...result, percent: percentStr};
    });

    /** @type {LH.Audit.Details.Table['headings']} */
    const headings = [
      {key: 'phase', valueType: 'text', label: str_(UIStrings.columnPhase)},
      {key: 'percent', valueType: 'text', label: str_(UIStrings.columnPercentOfLCP)},
      {key: 'timing', valueType: 'ms', label: str_(UIStrings.columnTiming)},
    ];

    return Audit.makeTableDetails(headings, results);
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static async audit(artifacts, context) {
    const trace = artifacts.traces[Audit.DEFAULT_PASS];
    const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
    const gatherContext = artifacts.GatherContext;
    const metricComputationData = {trace, devtoolsLog, gatherContext,
      settings: context.settings, URL: artifacts.URL};

    const elementTable = this.makeElementTable(artifacts);
    if (!elementTable) return {score: null, notApplicable: true};

    const items = [elementTable];
    let displayValue;

    const metricLcp = await this.getOptionalLCPMetric(metricComputationData, context);
    if (metricLcp) {
      displayValue = str_(i18n.UIStrings.ms, {timeInMs: metricLcp});
      const phaseTable = await this.makePhaseTable(metricLcp, metricComputationData, context);
      items.push(phaseTable);
    }

    const details = Audit.makeListDetails(items);

    return {
      score: 1,
      displayValue,
      details,
    };
  }
}

export default LargestContentfulPaintElement;
export {UIStrings};
