/**
 * @license Copyright 2023 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * @fileoverview Ensures every ARIA dialog element has a discernable, accessible name.
 * See base class in axe-audit.js for audit() implementation.
 */

import AxeAudit from './axe-audit.js';
import * as i18n from '../../lib/i18n/i18n.js';

const UIStrings = {
  /** Title of an accessibility audit that evaluates if ARIA dialog elements have an accessible name. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: 'Elements with `role="dialog"` or `role="alertdialog"` have accessible names.',
  /** Title of an accessibility audit that evaluates if ARIA dialog elements do not have accessible names. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: 'Elements with `role="dialog"` or `role="alertdialog"` do not have accessible ' +
      'names.',
  /** Description of a Lighthouse audit that tells the user *why* they should have accessible names for ARIA dialog elements. This is displayed after a user expands the section to see more. No character length limits. The last sentence starting with 'Learn' becomes link text to additional documentation. */
  description: 'ARIA dialog elements without accessible names may prevent screen readers users ' +
      'from discerning the purpose of these elements. ' +
      '[Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.7/aria-dialog-name).',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class AriaDialogName extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'aria-dialog-name',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

export default AriaDialogName;
export {UIStrings};
