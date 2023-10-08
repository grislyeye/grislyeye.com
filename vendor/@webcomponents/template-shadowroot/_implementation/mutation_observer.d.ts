/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
export declare function transformShadowRoots(within?: Node): {
    mutationObserver: undefined;
    cleanup(): void;
} | {
    mutationObserver: MutationObserver;
    cleanup(): void;
};
//# sourceMappingURL=mutation_observer.d.ts.map