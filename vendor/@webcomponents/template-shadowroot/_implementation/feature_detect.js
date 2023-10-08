/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// This isn't ideal. Setting .innerHTML is not compatible with some
// TrustedTypes CSP policies. Discussion at:
//     https://github.com/mfreed7/declarative-shadow-dom/issues/3
let hasNative;
export function hasNativeDeclarativeShadowRoots() {
    var _a;
    if (hasNative === undefined) {
        const html = `<div><template shadowrootmode="open"></template></div>`;
        const fragment = new DOMParser().parseFromString(html, 'text/html', {
            includeShadowRoots: true
        });
        hasNative = !!((_a = fragment.querySelector('div')) === null || _a === void 0 ? void 0 : _a.shadowRoot);
    }
    return hasNative;
}
//# sourceMappingURL=feature_detect.js.map