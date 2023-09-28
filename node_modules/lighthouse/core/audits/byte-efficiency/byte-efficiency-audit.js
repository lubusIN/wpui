/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import {Audit} from '../audit.js';
import {LanternInteractive} from '../../computed/metrics/lantern-interactive.js';
import * as i18n from '../../lib/i18n/i18n.js';
import {NetworkRecords} from '../../computed/network-records.js';
import {LoadSimulator} from '../../computed/load-simulator.js';
import {PageDependencyGraph} from '../../computed/page-dependency-graph.js';
import {LanternLargestContentfulPaint} from '../../computed/metrics/lantern-largest-contentful-paint.js';
import {LanternFirstContentfulPaint} from '../../computed/metrics/lantern-first-contentful-paint.js';
import {LCPImageRecord} from '../../computed/lcp-image-record.js';

const str_ = i18n.createIcuMessageFn(import.meta.url, {});

/** @typedef {import('../../lib/dependency-graph/simulator/simulator').Simulator} Simulator */
/** @typedef {import('../../lib/dependency-graph/base-node.js').Node} Node */

// Parameters for log-normal distribution scoring. These values were determined by fitting the
// log-normal cumulative distribution function curve to the former method of linear interpolation
// scoring between the control points {average = 300 ms, poor = 750 ms, zero = 5000 ms} using the
// curve-fit tool at https://mycurvefit.com/ rounded to the nearest integer. See
// https://www.desmos.com/calculator/gcexiyesdi for an interactive visualization of the curve fit.
const WASTED_MS_P10 = 150;
const WASTED_MS_MEDIAN = 935;

/**
 * @typedef {object} ByteEfficiencyProduct
 * @property {Array<LH.Audit.ByteEfficiencyItem>} items
 * @property {Map<string, number>=} wastedBytesByUrl
 * @property {LH.Audit.Details.Opportunity['headings']} headings
 * @property {LH.IcuMessage} [displayValue]
 * @property {LH.IcuMessage} [explanation]
 * @property {Array<string | LH.IcuMessage>} [warnings]
 * @property {Array<string>} [sortedBy]
 */

/**
 * @overview Used as the base for all byte efficiency audits. Computes total bytes
 *    and estimated time saved. Subclass and override `audit_` to return results.
 */
class ByteEfficiencyAudit extends Audit {
  /**
   * Creates a score based on the wastedMs value using log-normal distribution scoring. A negative
   * wastedMs will be scored as 1, assuming time is not being wasted with respect to the opportunity
   * being measured.
   *
   * @param {number} wastedMs
   * @return {number}
   */
  static scoreForWastedMs(wastedMs) {
    return Audit.computeLogNormalScore(
      {p10: WASTED_MS_P10, median: WASTED_MS_MEDIAN},
      wastedMs
    );
  }

  /**
   * Estimates the number of bytes this network record would have consumed on the network based on the
   * uncompressed size (totalBytes). Uses the actual transfer size from the network record if applicable.
   *
   * @param {LH.Artifacts.NetworkRequest|undefined} networkRecord
   * @param {number} totalBytes Uncompressed size of the resource
   * @param {LH.Crdp.Network.ResourceType=} resourceType
   * @return {number}
   */
  static estimateTransferSize(networkRecord, totalBytes, resourceType) {
    if (!networkRecord) {
      // We don't know how many bytes this asset used on the network, but we can guess it was
      // roughly the size of the content gzipped.
      // See https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer for specific CSS/Script examples
      // See https://discuss.httparchive.org/t/file-size-and-compression-savings/145 for fallback multipliers
      switch (resourceType) {
        case 'Stylesheet':
          // Stylesheets tend to compress extremely well.
          return Math.round(totalBytes * 0.2);
        case 'Script':
        case 'Document':
          // Scripts and HTML compress fairly well too.
          return Math.round(totalBytes * 0.33);
        default:
          // Otherwise we'll just fallback to the average savings in HTTPArchive
          return Math.round(totalBytes * 0.5);
      }
    } else if (networkRecord.resourceType === resourceType) {
      // This was a regular standalone asset, just use the transfer size.
      return networkRecord.transferSize || 0;
    } else {
      // This was an asset that was inlined in a different resource type (e.g. HTML document).
      // Use the compression ratio of the resource to estimate the total transferred bytes.
      const transferSize = networkRecord.transferSize || 0;
      const resourceSize = networkRecord.resourceSize || 0;
      // Get the compression ratio, if it's an invalid number, assume no compression.
      const compressionRatio = Number.isFinite(resourceSize) && resourceSize > 0 ?
        (transferSize / resourceSize) : 1;
      return Math.round(totalBytes * compressionRatio);
    }
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static async audit(artifacts, context) {
    const gatherContext = artifacts.GatherContext;
    const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
    const settings = context?.settings || {};
    const simulatorOptions = {
      devtoolsLog,
      settings,
    };
    const networkRecords = await NetworkRecords.request(devtoolsLog, context);
    const hasContentfulRecords = networkRecords.some(record => record.transferSize);

    // Requesting load simulator requires non-empty network records.
    // Timespans are not guaranteed to have any network activity.
    // There are no bytes to be saved if no bytes were downloaded, so mark N/A if empty.
    if (!hasContentfulRecords && gatherContext.gatherMode === 'timespan') {
      return {
        score: 1,
        notApplicable: true,
      };
    }

    const metricComputationInput = Audit.makeMetricComputationDataInput(artifacts, context);

    const [result, simulator] = await Promise.all([
      this.audit_(artifacts, networkRecords, context),
      LoadSimulator.request(simulatorOptions, context),
    ]);

    return this.createAuditProduct(result, simulator, metricComputationInput, context);
  }

  /**
   * Computes the estimated effect of all the byte savings on the provided graph.
   *
   * @param {Array<LH.Audit.ByteEfficiencyItem>} results The array of byte savings results per resource
   * @param {Node} graph
   * @param {Simulator} simulator
   * @param {{label?: string, providedWastedBytesByUrl?: Map<string, number>}=} options
   * @return {{savings: number, simulationBeforeChanges: LH.Gatherer.Simulation.Result, simulationAfterChanges: LH.Gatherer.Simulation.Result}}
   */
  static computeWasteWithGraph(results, graph, simulator, options) {
    options = Object.assign({label: ''}, options);
    const beforeLabel = `${this.meta.id}-${options.label}-before`;
    const afterLabel = `${this.meta.id}-${options.label}-after`;

    const simulationBeforeChanges = simulator.simulate(graph, {label: beforeLabel});

    const wastedBytesByUrl = options.providedWastedBytesByUrl || new Map();
    if (!options.providedWastedBytesByUrl) {
      for (const {url, wastedBytes} of results) {
        wastedBytesByUrl.set(url, (wastedBytesByUrl.get(url) || 0) + wastedBytes);
      }
    }

    // Update all the transfer sizes to reflect implementing our recommendations
    /** @type {Map<string, number>} */
    const originalTransferSizes = new Map();
    graph.traverse(node => {
      if (node.type !== 'network') return;
      const wastedBytes = wastedBytesByUrl.get(node.record.url);
      if (!wastedBytes) return;

      const original = node.record.transferSize;
      originalTransferSizes.set(node.record.requestId, original);

      node.record.transferSize = Math.max(original - wastedBytes, 0);
    });

    const simulationAfterChanges = simulator.simulate(graph, {label: afterLabel});

    // Restore the original transfer size after we've done our simulation
    graph.traverse(node => {
      if (node.type !== 'network') return;
      const originalTransferSize = originalTransferSizes.get(node.record.requestId);
      if (originalTransferSize === undefined) return;
      node.record.transferSize = originalTransferSize;
    });

    const savings = simulationBeforeChanges.timeInMs - simulationAfterChanges.timeInMs;

    return {
      // Round waste to nearest 10ms
      savings: Math.round(Math.max(savings, 0) / 10) * 10,
      simulationBeforeChanges,
      simulationAfterChanges,
    };
  }

  /**
   * Computes the estimated effect of all the byte savings on the maximum of the following:
   *
   * - end time of the last long task in the provided graph
   * - (if includeLoad is true or not provided) end time of the last node in the graph
   *
   * @param {Array<LH.Audit.ByteEfficiencyItem>} results The array of byte savings results per resource
   * @param {Node} graph
   * @param {Simulator} simulator
   * @param {{includeLoad?: boolean, providedWastedBytesByUrl?: Map<string, number>}=} options
   * @return {number}
   */
  static computeWasteWithTTIGraph(results, graph, simulator, options) {
    options = Object.assign({includeLoad: true}, options);
    const {savings: savingsOnOverallLoad, simulationBeforeChanges, simulationAfterChanges} =
      this.computeWasteWithGraph(results, graph, simulator, {
        ...options,
        label: 'overallLoad',
      });

    const savingsOnTTI =
      LanternInteractive.getLastLongTaskEndTime(simulationBeforeChanges.nodeTimings) -
      LanternInteractive.getLastLongTaskEndTime(simulationAfterChanges.nodeTimings);

    let savings = savingsOnTTI;
    if (options.includeLoad) savings = Math.max(savings, savingsOnOverallLoad);

    // Round waste to nearest 10ms
    return Math.round(Math.max(savings, 0) / 10) * 10;
  }

  /**
   * @param {ByteEfficiencyProduct} result
   * @param {Simulator} simulator
   * @param {LH.Artifacts.MetricComputationDataInput} metricComputationInput
   * @param {LH.Audit.Context} context
   * @return {Promise<LH.Audit.Product>}
   */
  static async createAuditProduct(result, simulator, metricComputationInput, context) {
    const results = result.items.sort((itemA, itemB) => itemB.wastedBytes - itemA.wastedBytes);

    const wastedBytes = results.reduce((sum, item) => sum + item.wastedBytes, 0);

    /** @type {LH.Audit.MetricSavings} */
    const metricSavings = {
      FCP: 0,
      LCP: 0,
    };

    // `wastedMs` may be negative, if making the opportunity change could be detrimental.
    // This is useful information in the LHR and should be preserved.
    let wastedMs;
    if (metricComputationInput.gatherContext.gatherMode === 'navigation') {
      const graph = await PageDependencyGraph.request(metricComputationInput, context);
      const {
        pessimisticGraph: pessimisticFCPGraph,
      } = await LanternFirstContentfulPaint.request(metricComputationInput, context);
      const {
        pessimisticGraph: pessimisticLCPGraph,
      } = await LanternLargestContentfulPaint.request(metricComputationInput, context);

      wastedMs = this.computeWasteWithTTIGraph(results, graph, simulator, {
        providedWastedBytesByUrl: result.wastedBytesByUrl,
      });

      const {savings: fcpSavings} = this.computeWasteWithGraph(
        results,
        pessimisticFCPGraph,
        simulator,
        {providedWastedBytesByUrl: result.wastedBytesByUrl, label: 'fcp'}
      );
      const {savings: lcpGraphSavings} = this.computeWasteWithGraph(
        results,
        pessimisticLCPGraph,
        simulator,
        {providedWastedBytesByUrl: result.wastedBytesByUrl, label: 'lcp'}
      );

      // The LCP graph can underestimate the LCP savings if there is potential savings on the LCP record itself.
      let lcpRecordSavings = 0;
      const lcpRecord = await LCPImageRecord.request(metricComputationInput, context);
      if (lcpRecord) {
        const lcpResult = results.find(result => result.url === lcpRecord.url);
        if (lcpResult) {
          lcpRecordSavings = simulator.computeWastedMsFromWastedBytes(lcpResult.wastedBytes);
        }
      }

      metricSavings.FCP = fcpSavings;
      metricSavings.LCP = Math.max(lcpGraphSavings, lcpRecordSavings);
    } else {
      wastedMs = simulator.computeWastedMsFromWastedBytes(wastedBytes);
    }

    let displayValue = result.displayValue || '';
    if (typeof result.displayValue === 'undefined' && wastedBytes) {
      displayValue = str_(i18n.UIStrings.displayValueByteSavings, {wastedBytes});
    }

    const sortedBy = result.sortedBy || ['wastedBytes'];
    const details = Audit.makeOpportunityDetails(result.headings, results,
      {overallSavingsMs: wastedMs, overallSavingsBytes: wastedBytes, sortedBy});

    // TODO: Remove from debug data once `metricSavings` is added to the LHR.
    // For now, add it to debug data for visibility.
    details.debugData = {
      type: 'debugdata',
      metricSavings,
    };

    return {
      explanation: result.explanation,
      warnings: result.warnings,
      displayValue,
      numericValue: wastedMs,
      numericUnit: 'millisecond',
      score: ByteEfficiencyAudit.scoreForWastedMs(wastedMs),
      details,
      metricSavings,
    };
  }

  /* eslint-disable no-unused-vars */

  /**
   * @param {LH.Artifacts} artifacts
   * @param {Array<LH.Artifacts.NetworkRequest>} networkRecords
   * @param {LH.Audit.Context} context
   * @return {ByteEfficiencyProduct|Promise<ByteEfficiencyProduct>}
   */
  static audit_(artifacts, networkRecords, context) {
    throw new Error('audit_ unimplemented');
  }

  /* eslint-enable no-unused-vars */
}

export {ByteEfficiencyAudit};
