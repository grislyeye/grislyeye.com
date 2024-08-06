(() => {
  // node_modules/lit-html/lit-html.js
  var n = globalThis;
  var c = n.trustedTypes;
  var h = c ? c.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0;
  var f = "$lit$";
  var v = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var m = "?" + v;
  var _ = `<${m}>`;
  var w = document;
  var lt = () => w.createComment("");
  var st = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2;
  var g = Array.isArray;
  var $ = (t2) => g(t2) || "function" == typeof t2?.[Symbol.iterator];
  var x = "[ 	\n\f\r]";
  var T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var E = /-->/g;
  var k = />/g;
  var O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var S = /'/g;
  var j = /"/g;
  var M = /^(?:script|style|textarea|title)$/i;
  var P = (t2) => (i, ...s2) => ({ _$litType$: t2, strings: i, values: s2 });
  var ke = P(1);
  var Oe = P(2);
  var Se = P(3);
  var R = Symbol.for("lit-noChange");
  var D = Symbol.for("lit-nothing");
  var V = /* @__PURE__ */ new WeakMap();
  var I = w.createTreeWalker(w, 129);
  function N(t2, i) {
    if (!g(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== h ? h.createHTML(i) : i;
  }
  var U = (t2, i) => {
    const s2 = t2.length - 1, e = [];
    let h3, o = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", n2 = T;
    for (let i2 = 0; i2 < s2; i2++) {
      const s3 = t2[i2];
      let r, l2, c3 = -1, a = 0;
      for (; a < s3.length && (n2.lastIndex = a, l2 = n2.exec(s3), null !== l2); ) a = n2.lastIndex, n2 === T ? "!--" === l2[1] ? n2 = E : void 0 !== l2[1] ? n2 = k : void 0 !== l2[2] ? (M.test(l2[2]) && (h3 = RegExp("</" + l2[2], "g")), n2 = O) : void 0 !== l2[3] && (n2 = O) : n2 === O ? ">" === l2[0] ? (n2 = h3 ?? T, c3 = -1) : void 0 === l2[1] ? c3 = -2 : (c3 = n2.lastIndex - l2[2].length, r = l2[1], n2 = void 0 === l2[3] ? O : '"' === l2[3] ? j : S) : n2 === j || n2 === S ? n2 = O : n2 === E || n2 === k ? n2 = T : (n2 = O, h3 = void 0);
      const u2 = n2 === O && t2[i2 + 1].startsWith("/>") ? " " : "";
      o += n2 === T ? s3 + _ : c3 >= 0 ? (e.push(r), s3.slice(0, c3) + f + s3.slice(c3) + v + u2) : s3 + v + (-2 === c3 ? i2 : u2);
    }
    return [N(t2, o + (t2[s2] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
  };
  var B = class _B {
    constructor({ strings: t2, _$litType$: i }, s2) {
      let e;
      this.parts = [];
      let h3 = 0, o = 0;
      const n2 = t2.length - 1, r = this.parts, [l2, a] = U(t2, i);
      if (this.el = _B.createElement(l2, s2), I.currentNode = this.el.content, 2 === i || 3 === i) {
        const t3 = this.el.content.firstChild;
        t3.replaceWith(...t3.childNodes);
      }
      for (; null !== (e = I.nextNode()) && r.length < n2; ) {
        if (1 === e.nodeType) {
          if (e.hasAttributes()) for (const t3 of e.getAttributeNames()) if (t3.endsWith(f)) {
            const i2 = a[o++], s3 = e.getAttribute(t3).split(v), n3 = /([.?@])?(.*)/.exec(i2);
            r.push({ type: 1, index: h3, name: n3[2], strings: s3, ctor: "." === n3[1] ? Y : "?" === n3[1] ? Z : "@" === n3[1] ? q : G }), e.removeAttribute(t3);
          } else t3.startsWith(v) && (r.push({ type: 6, index: h3 }), e.removeAttribute(t3));
          if (M.test(e.tagName)) {
            const t3 = e.textContent.split(v), i2 = t3.length - 1;
            if (i2 > 0) {
              e.textContent = c ? c.emptyScript : "";
              for (let s3 = 0; s3 < i2; s3++) e.append(t3[s3], lt()), I.nextNode(), r.push({ type: 2, index: ++h3 });
              e.append(t3[i2], lt());
            }
          }
        } else if (8 === e.nodeType) if (e.data === m) r.push({ type: 2, index: h3 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = e.data.indexOf(v, t3 + 1)); ) r.push({ type: 7, index: h3 }), t3 += v.length - 1;
        }
        h3++;
      }
    }
    static createElement(t2, i) {
      const s2 = w.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  };
  function z(t2, i, s2 = t2, e) {
    if (i === R) return i;
    let h3 = void 0 !== e ? s2.o?.[e] : s2.l;
    const o = st(i) ? void 0 : i._$litDirective$;
    return h3?.constructor !== o && (h3?._$AO?.(false), void 0 === o ? h3 = void 0 : (h3 = new o(t2), h3._$AT(t2, s2, e)), void 0 !== e ? (s2.o ??= [])[e] = h3 : s2.l = h3), void 0 !== h3 && (i = z(t2, h3._$AS(t2, i.values), h3, e)), i;
  }
  var F = class {
    constructor(t2, i) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i }, parts: s2 } = this._$AD, e = (t2?.creationScope ?? w).importNode(i, true);
      I.currentNode = e;
      let h3 = I.nextNode(), o = 0, n2 = 0, r = s2[0];
      for (; void 0 !== r; ) {
        if (o === r.index) {
          let i2;
          2 === r.type ? i2 = new et(h3, h3.nextSibling, this, t2) : 1 === r.type ? i2 = new r.ctor(h3, r.name, r.strings, this, t2) : 6 === r.type && (i2 = new K(h3, this, t2)), this._$AV.push(i2), r = s2[++n2];
        }
        o !== r?.index && (h3 = I.nextNode(), o++);
      }
      return I.currentNode = w, e;
    }
    p(t2) {
      let i = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i), i += s2.strings.length - 2) : s2._$AI(t2[i])), i++;
    }
  };
  var et = class _et {
    get _$AU() {
      return this._$AM?._$AU ?? this.v;
    }
    constructor(t2, i, s2, e) {
      this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t2, this._$AB = i, this._$AM = s2, this.options = e, this.v = e?.isConnected ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i = this._$AM;
      return void 0 !== i && 11 === t2?.nodeType && (t2 = i.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i = this) {
      t2 = z(this, t2, i), st(t2) ? t2 === D || null == t2 || "" === t2 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t2 !== this._$AH && t2 !== R && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : $(t2) ? this.k(t2) : this._(t2);
    }
    O(t2) {
      return this._$AA.parentNode.insertBefore(t2, this._$AB);
    }
    T(t2) {
      this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
    }
    _(t2) {
      this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(w.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
      const { values: i, _$litType$: s2 } = t2, e = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = B.createElement(N(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e) this._$AH.p(i);
      else {
        const t3 = new F(e, this), s3 = t3.u(this.options);
        t3.p(i), this.T(s3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i = V.get(t2.strings);
      return void 0 === i && V.set(t2.strings, i = new B(t2)), i;
    }
    k(t2) {
      g(this._$AH) || (this._$AH = [], this._$AR());
      const i = this._$AH;
      let s2, e = 0;
      for (const h3 of t2) e === i.length ? i.push(s2 = new _et(this.O(lt()), this.O(lt()), this, this.options)) : s2 = i[e], s2._$AI(h3), e++;
      e < i.length && (this._$AR(s2 && s2._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t2 = this._$AA.nextSibling, i) {
      for (this._$AP?.(false, true, i); t2 && t2 !== this._$AB; ) {
        const i2 = t2.nextSibling;
        t2.remove(), t2 = i2;
      }
    }
    setConnected(t2) {
      void 0 === this._$AM && (this.v = t2, this._$AP?.(t2));
    }
  };
  var G = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t2, i, s2, e, h3) {
      this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t2, this.name = i, this._$AM = e, this.options = h3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = D;
    }
    _$AI(t2, i = this, s2, e) {
      const h3 = this.strings;
      let o = false;
      if (void 0 === h3) t2 = z(this, t2, i, 0), o = !st(t2) || t2 !== this._$AH && t2 !== R, o && (this._$AH = t2);
      else {
        const e2 = t2;
        let n2, r;
        for (t2 = h3[0], n2 = 0; n2 < h3.length - 1; n2++) r = z(this, e2[s2 + n2], i, n2), r === R && (r = this._$AH[n2]), o ||= !st(r) || r !== this._$AH[n2], r === D ? t2 = D : t2 !== D && (t2 += (r ?? "") + h3[n2 + 1]), this._$AH[n2] = r;
      }
      o && !e && this.j(t2);
    }
    j(t2) {
      t2 === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
    }
  };
  var Y = class extends G {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t2) {
      this.element[this.name] = t2 === D ? void 0 : t2;
    }
  };
  var Z = class extends G {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t2) {
      this.element.toggleAttribute(this.name, !!t2 && t2 !== D);
    }
  };
  var q = class extends G {
    constructor(t2, i, s2, e, h3) {
      super(t2, i, s2, e, h3), this.type = 5;
    }
    _$AI(t2, i = this) {
      if ((t2 = z(this, t2, i, 0) ?? D) === R) return;
      const s2 = this._$AH, e = t2 === D && s2 !== D || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h3 = t2 !== D && (s2 === D || e);
      e && this.element.removeEventListener(this.name, this, s2), h3 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  };
  var K = class {
    constructor(t2, i, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      z(this, t2);
    }
  };
  var si = { M: f, P: v, A: m, C: 1, L: U, R: F, D: $, V: z, I: et, H: G, N: Z, U: q, B: Y, F: K };
  var Re = n.litHtmlPolyfillSupport;
  Re?.(B, et), (n.litHtmlVersions ??= []).push("3.2.0");
  var Q = (t2, i, s2) => {
    const e = s2?.renderBefore ?? i;
    let h3 = e._$litPart$;
    if (void 0 === h3) {
      const t3 = s2?.renderBefore ?? null;
      e._$litPart$ = h3 = new et(i.insertBefore(lt(), t3), t3, void 0, s2 ?? {});
    }
    return h3._$AI(t2), h3;
  };

  // node_modules/lit-html/private-ssr-support.js
  var Me = null;
  var Ie = { boundAttributeSuffix: si.M, marker: si.P, markerMatch: si.A, HTML_RESULT: si.C, getTemplateHtml: si.L, overrideDirectiveResolve: (e, t2) => class extends e {
    _$AS(e2, r) {
      return t2(this, r);
    }
  }, patchDirectiveResolve: (e, t2) => {
    if (e.prototype._$AS !== t2) {
      Me ??= e.prototype._$AS.name;
      for (let r = e.prototype; r !== Object.prototype; r = Object.getPrototypeOf(r)) if (r.hasOwnProperty(Me)) return void (r[Me] = t2);
      throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527");
    }
  }, setDirectiveClass(e, t2) {
    e._$litDirective$ = t2;
  }, getAttributePartCommittedValue: (e, t2, r) => {
    let i = R;
    return e.j = (e2) => i = e2, e._$AI(t2, e, r), i;
  }, connectedDisconnectable: (e) => ({ ...e, _$AU: true }), resolveDirective: si.V, AttributePart: si.H, PropertyPart: si.B, BooleanAttributePart: si.N, EventPart: si.U, ElementPart: si.F, TemplateInstance: si.R, isIterable: si.D, ChildPart: si.I };

  // node_modules/lit-html/directive.js
  var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };

  // node_modules/lit-html/directive-helpers.js
  var { I: et2 } = si;
  var st2 = (o) => null === o || "object" != typeof o && "function" != typeof o;
  var nt = (o, t2) => void 0 === t2 ? void 0 !== o?._$litType$ : o?._$litType$ === t2;
  var ot = (o) => null != o?._$litType$?.h;
  var rt = (o) => void 0 === o.strings;

  // node_modules/@lit-labs/ssr-client/lib/hydrate-lit-html.js
  var { TemplateInstance: l, isIterable: s, resolveDirective: d, ChildPart: c2, ElementPart: p } = Ie;
  var f2 = (e, t2, r = {}) => {
    if (void 0 !== t2._$litPart$) throw Error("container already contains a live render");
    let n2, o, i;
    const a = [], l2 = document.createTreeWalker(t2, NodeFilter.SHOW_COMMENT);
    let s2;
    for (; null !== (s2 = l2.nextNode()); ) {
      const t3 = s2.data;
      if (t3.startsWith("lit-part")) {
        if (0 === a.length && void 0 !== n2) throw Error(`There must be only one root part per container. Found a part marker (${s2}) when we already have a root part marker (${o})`);
        i = m2(e, s2, a, r), void 0 === n2 && (n2 = i), o ??= s2;
      } else if (t3.startsWith("lit-node")) u(s2, a, r);
      else if (t3.startsWith("/lit-part")) {
        if (1 === a.length && i !== n2) throw Error("internal error");
        i = h2(s2, i, a);
      }
    }
    if (void 0 === n2) {
      const e2 = t2 instanceof ShadowRoot ? "{container.host.localName}'s shadow root" : t2 instanceof DocumentFragment ? "DocumentFragment" : t2.localName;
      console.error(`There should be exactly one root part in a render container, but we didn't find any in ${e2}.`);
    }
    t2._$litPart$ = n2;
  };
  var m2 = (t2, r, a, p2) => {
    let f3, m3;
    if (0 === a.length) m3 = new c2(r, null, void 0, p2), f3 = t2;
    else {
      const e = a[a.length - 1];
      if ("template-instance" === e.type) m3 = new c2(r, null, e.instance, p2), e.instance._$AV.push(m3), f3 = e.result.values[e.instancePartIndex++], e.templatePartIndex++;
      else if ("iterable" === e.type) {
        m3 = new c2(r, null, e.part, p2);
        const t3 = e.iterator.next();
        if (t3.done) throw f3 = void 0, e.done = true, Error("Unhandled shorter than expected iterable");
        f3 = t3.value, e.part._$AH.push(m3);
      } else m3 = new c2(r, null, e.part, p2);
    }
    if (f3 = d(m3, f3), f3 === R) a.push({ part: m3, type: "leaf" });
    else if (st2(f3)) a.push({ part: m3, type: "leaf" }), m3._$AH = f3;
    else if (nt(f3)) {
      if (ot(f3)) throw Error("compiled templates are not supported");
      const e = "lit-part " + w2(f3);
      if (r.data !== e) throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");
      {
        const e2 = c2.prototype._$AC(f3), t3 = new l(e2, m3);
        a.push({ type: "template-instance", instance: t3, part: m3, templatePartIndex: 0, instancePartIndex: 0, result: f3 }), m3._$AH = t3;
      }
    } else s(f3) ? (a.push({ part: m3, type: "iterable", value: f3, iterator: f3[Symbol.iterator](), done: false }), m3._$AH = []) : (a.push({ part: m3, type: "leaf" }), m3._$AH = f3 ?? "");
    return m3;
  };
  var h2 = (e, t2, r) => {
    if (void 0 === t2) throw Error("unbalanced part marker");
    t2._$AB = e;
    const n2 = r.pop();
    if ("iterable" === n2.type && !n2.iterator.next().done) throw Error("unexpected longer than expected iterable");
    if (r.length > 0) return r[r.length - 1].part;
  };
  var u = (e, t2, n2) => {
    const o = /lit-node (\d+)/.exec(e.data), i = parseInt(o[1]), l2 = e.nextElementSibling;
    if (null === l2) throw Error("could not find node for attribute parts");
    l2.removeAttribute("defer-hydration");
    const s2 = t2[t2.length - 1];
    if ("template-instance" !== s2.type) throw Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.");
    {
      const e2 = s2.instance;
      for (; ; ) {
        const t3 = e2._$AD.parts[s2.templatePartIndex];
        if (void 0 === t3 || t3.type !== t.ATTRIBUTE && t3.type !== t.ELEMENT || t3.index !== i) break;
        if (t3.type === t.ATTRIBUTE) {
          const o2 = new t3.ctor(l2, t3.name, t3.strings, s2.instance, n2), i2 = rt(o2) ? s2.result.values[s2.instancePartIndex] : s2.result.values, d2 = !(o2.type === t.EVENT || o2.type === t.PROPERTY);
          o2._$AI(i2, o2, s2.instancePartIndex, d2), s2.instancePartIndex += t3.strings.length - 1, e2._$AV.push(o2);
        } else {
          const t4 = new p(l2, s2.instance, n2);
          d(t4, s2.result.values[s2.instancePartIndex++]), e2._$AV.push(t4);
        }
        s2.templatePartIndex++;
      }
    }
  };
  var w2 = (e) => {
    const t2 = new Uint32Array(2).fill(5381);
    for (const r2 of e.strings) for (let e2 = 0; e2 < r2.length; e2++) t2[e2 % 2] = 33 * t2[e2 % 2] ^ r2.charCodeAt(e2);
    const r = String.fromCharCode(...new Uint8Array(t2.buffer));
    return btoa(r);
  };

  // node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js
  globalThis.litElementHydrateSupport = ({ LitElement: s2 }) => {
    const h3 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s2), "observedAttributes").get;
    Object.defineProperty(s2, "observedAttributes", { get() {
      return [...h3.call(this), "defer-hydration"];
    } });
    const e = s2.prototype.attributeChangedCallback;
    s2.prototype.attributeChangedCallback = function(t2, i, s3) {
      "defer-hydration" === t2 && null === s3 && n2.call(this), e.call(this, t2, i, s3);
    };
    const n2 = s2.prototype.connectedCallback;
    s2.prototype.connectedCallback = function() {
      this.hasAttribute("defer-hydration") || n2.call(this);
    };
    const o = s2.prototype.createRenderRoot;
    s2.prototype.createRenderRoot = function() {
      return this.shadowRoot ? (this._$AG = true, this.shadowRoot) : o.call(this);
    };
    const r = Object.getPrototypeOf(s2.prototype).update;
    s2.prototype.update = function(s3) {
      const h4 = this.render();
      if (r.call(this, s3), this._$AG) {
        this._$AG = false;
        for (let t2 = 0; t2 < this.attributes.length; t2++) {
          const i = this.attributes[t2];
          if (i.name.startsWith("hydrate-internals-")) {
            const t3 = i.name.slice(18);
            this.removeAttribute(t3), this.removeAttribute(i.name);
          }
        }
        f2(h4, this.renderRoot, this.renderOptions);
      } else Q(h4, this.renderRoot, this.renderOptions);
    };
  };
})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/private-ssr-support.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-client/lib/hydrate-lit-html.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
