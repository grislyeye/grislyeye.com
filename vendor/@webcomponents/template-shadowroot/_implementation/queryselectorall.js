/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { hasNativeDeclarativeShadowRoots } from './feature_detect.js';
/*
 * Traverses the DOM to find all <template> elements with a `shadowroot`
 * attribute and move their content into a ShadowRoot on their parent element.
 *
 * This processing is done bottom up so that when top-level <template>
 * elements are hydrated, their contents are already hydrated and in the
 * final correct structure of elements and shadow roots.
 */
export const hydrateShadowRoots = (root) => {
    if (hasNativeDeclarativeShadowRoots()) {
        return; // nothing to do
    }
    const stack = [{
            template: undefined,
            templates: Array.from(root.querySelectorAll('template')).reverse()
        }];
    while (stack.length > 0) {
        const context = stack[stack.length - 1];
        const childTemplate = context.templates.pop();
        if (childTemplate === undefined) {
            const template = context.template;
            if (template !== undefined) {
                const host = template.parentElement;
                const mode = template.getAttribute('shadowrootmode');
                if (mode === 'open' || mode === 'closed') {
                    const delegatesFocus = template.hasAttribute('shadowrootdelegatesfocus');
                    try {
                        const shadow = host.attachShadow({ mode, delegatesFocus });
                        shadow.append(template.content);
                    }
                    catch {
                        // there was already a shadow root.
                        // TODO(rictic): log an error event?
                    }
                    host.removeChild(template);
                }
            }
            stack.pop();
            continue;
        }
        stack.push({
            template: childTemplate,
            templates: Array.from(childTemplate.content.querySelectorAll('template'))
                .reverse()
        });
    }
};
//# sourceMappingURL=queryselectorall.js.map