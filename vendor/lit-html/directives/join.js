/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*oo(o,t){const f="function"==typeof t;if(void 0!==o){let i=-1;for(const n of o)i>-1&&(yield f?t(i):t),i++,yield n}}export{oo as join};
//# sourceMappingURL=join.js.map
