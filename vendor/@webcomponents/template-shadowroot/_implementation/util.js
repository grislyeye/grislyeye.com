/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
export const hasNoParentElement = (e) => e.parentElement === null;
export const isTemplate = (e) => e.tagName === 'TEMPLATE';
export const isElement = (e) => e.nodeType === Node.ELEMENT_NODE;
//# sourceMappingURL=util.js.map