(() => {
  // node_modules/lit-html/lit-html.js
  var t = globalThis;
  var i = t.trustedTypes;
  var s = i ? i.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e = "$lit$";
  var h = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o = "?" + h;
  var n = `<${o}>`;
  var r = document;
  var l = () => r.createComment("");
  var c = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var a = Array.isArray;
  var u = (t4) => a(t4) || "function" == typeof t4?.[Symbol.iterator];
  var d = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y = (t4) => (i4, ...s3) => ({ _$litType$: t4, strings: i4, values: s3 });
  var x = y(1);
  var b = y(2);
  var w = y(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r.createTreeWalker(r, 129);
  function P(t4, i4) {
    if (!a(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i4) : i4;
  }
  var V = (t4, i4) => {
    const s3 = t4.length - 1, o2 = [];
    let r3, l4 = 2 === i4 ? "<svg>" : 3 === i4 ? "<math>" : "", c3 = f;
    for (let i5 = 0; i5 < s3; i5++) {
      const s4 = t4[i5];
      let a2, u3, d3 = -1, y2 = 0;
      for (; y2 < s4.length && (c3.lastIndex = y2, u3 = c3.exec(s4), null !== u3); ) y2 = c3.lastIndex, c3 === f ? "!--" === u3[1] ? c3 = v : void 0 !== u3[1] ? c3 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r3 = RegExp("</" + u3[2], "g")), c3 = m) : void 0 !== u3[3] && (c3 = m) : c3 === m ? ">" === u3[0] ? (c3 = r3 ?? f, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c3.lastIndex - u3[2].length, a2 = u3[1], c3 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p) : c3 === g || c3 === p ? c3 = m : c3 === v || c3 === _ ? c3 = f : (c3 = m, r3 = void 0);
      const x2 = c3 === m && t4[i5 + 1].startsWith("/>") ? " " : "";
      l4 += c3 === f ? s4 + n : d3 >= 0 ? (o2.push(a2), s4.slice(0, d3) + e + s4.slice(d3) + h + x2) : s4 + h + (-2 === d3 ? i5 : x2);
    }
    return [P(t4, l4 + (t4[s3] || "<?>") + (2 === i4 ? "</svg>" : 3 === i4 ? "</math>" : "")), o2];
  };
  var N = class _N {
    constructor({ strings: t4, _$litType$: s3 }, n2) {
      let r3;
      this.parts = [];
      let c3 = 0, a2 = 0;
      const u3 = t4.length - 1, d3 = this.parts, [f4, v2] = V(t4, s3);
      if (this.el = _N.createElement(f4, n2), C.currentNode = this.el.content, 2 === s3 || 3 === s3) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r3 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r3.nodeType) {
          if (r3.hasAttributes()) for (const t5 of r3.getAttributeNames()) if (t5.endsWith(e)) {
            const i4 = v2[a2++], s4 = r3.getAttribute(t5).split(h), e3 = /([.?@])?(.*)/.exec(i4);
            d3.push({ type: 1, index: c3, name: e3[2], strings: s4, ctor: "." === e3[1] ? H : "?" === e3[1] ? I : "@" === e3[1] ? L : k }), r3.removeAttribute(t5);
          } else t5.startsWith(h) && (d3.push({ type: 6, index: c3 }), r3.removeAttribute(t5));
          if ($.test(r3.tagName)) {
            const t5 = r3.textContent.split(h), s4 = t5.length - 1;
            if (s4 > 0) {
              r3.textContent = i ? i.emptyScript : "";
              for (let i4 = 0; i4 < s4; i4++) r3.append(t5[i4], l()), C.nextNode(), d3.push({ type: 2, index: ++c3 });
              r3.append(t5[s4], l());
            }
          }
        } else if (8 === r3.nodeType) if (r3.data === o) d3.push({ type: 2, index: c3 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = r3.data.indexOf(h, t5 + 1)); ) d3.push({ type: 7, index: c3 }), t5 += h.length - 1;
        }
        c3++;
      }
    }
    static createElement(t4, i4) {
      const s3 = r.createElement("template");
      return s3.innerHTML = t4, s3;
    }
  };
  function S(t4, i4, s3 = t4, e3) {
    if (i4 === T) return i4;
    let h3 = void 0 !== e3 ? s3._$Co?.[e3] : s3._$Cl;
    const o2 = c(i4) ? void 0 : i4._$litDirective$;
    return h3?.constructor !== o2 && (h3?._$AO?.(false), void 0 === o2 ? h3 = void 0 : (h3 = new o2(t4), h3._$AT(t4, s3, e3)), void 0 !== e3 ? (s3._$Co ??= [])[e3] = h3 : s3._$Cl = h3), void 0 !== h3 && (i4 = S(t4, h3._$AS(t4, i4.values), h3, e3)), i4;
  }
  var M = class {
    constructor(t4, i4) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i4 }, parts: s3 } = this._$AD, e3 = (t4?.creationScope ?? r).importNode(i4, true);
      C.currentNode = e3;
      let h3 = C.nextNode(), o2 = 0, n2 = 0, l4 = s3[0];
      for (; void 0 !== l4; ) {
        if (o2 === l4.index) {
          let i5;
          2 === l4.type ? i5 = new R(h3, h3.nextSibling, this, t4) : 1 === l4.type ? i5 = new l4.ctor(h3, l4.name, l4.strings, this, t4) : 6 === l4.type && (i5 = new z(h3, this, t4)), this._$AV.push(i5), l4 = s3[++n2];
        }
        o2 !== l4?.index && (h3 = C.nextNode(), o2++);
      }
      return C.currentNode = r, e3;
    }
    p(t4) {
      let i4 = 0;
      for (const s3 of this._$AV) void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t4, s3, i4), i4 += s3.strings.length - 2) : s3._$AI(t4[i4])), i4++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t4, i4, s3, e3) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s3, this.options = e3, this._$Cv = e3?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i4 = this._$AM;
      return void 0 !== i4 && 11 === t4?.nodeType && (t4 = i4.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i4 = this) {
      t4 = S(this, t4, i4), c(t4) ? t4 === E || null == t4 || "" === t4 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t4 !== this._$AH && t4 !== T && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : u(t4) ? this.k(t4) : this._(t4);
    }
    O(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    _(t4) {
      this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(r.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      const { values: i4, _$litType$: s3 } = t4, e3 = "number" == typeof s3 ? this._$AC(t4) : (void 0 === s3.el && (s3.el = N.createElement(P(s3.h, s3.h[0]), this.options)), s3);
      if (this._$AH?._$AD === e3) this._$AH.p(i4);
      else {
        const t5 = new M(e3, this), s4 = t5.u(this.options);
        t5.p(i4), this.T(s4), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i4 = A.get(t4.strings);
      return void 0 === i4 && A.set(t4.strings, i4 = new N(t4)), i4;
    }
    k(t4) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s3, e3 = 0;
      for (const h3 of t4) e3 === i4.length ? i4.push(s3 = new _R(this.O(l()), this.O(l()), this, this.options)) : s3 = i4[e3], s3._$AI(h3), e3++;
      e3 < i4.length && (this._$AR(s3 && s3._$AB.nextSibling, e3), i4.length = e3);
    }
    _$AR(t4 = this._$AA.nextSibling, i4) {
      for (this._$AP?.(false, true, i4); t4 && t4 !== this._$AB; ) {
        const i5 = t4.nextSibling;
        t4.remove(), t4 = i5;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i4, s3, e3, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e3, this.options = h3, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = E;
    }
    _$AI(t4, i4 = this, s3, e3) {
      const h3 = this.strings;
      let o2 = false;
      if (void 0 === h3) t4 = S(this, t4, i4, 0), o2 = !c(t4) || t4 !== this._$AH && t4 !== T, o2 && (this._$AH = t4);
      else {
        const e4 = t4;
        let n2, r3;
        for (t4 = h3[0], n2 = 0; n2 < h3.length - 1; n2++) r3 = S(this, e4[s3 + n2], i4, n2), r3 === T && (r3 = this._$AH[n2]), o2 ||= !c(r3) || r3 !== this._$AH[n2], r3 === E ? t4 = E : t4 !== E && (t4 += (r3 ?? "") + h3[n2 + 1]), this._$AH[n2] = r3;
      }
      o2 && !e3 && this.j(t4);
    }
    j(t4) {
      t4 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === E ? void 0 : t4;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== E);
    }
  };
  var L = class extends k {
    constructor(t4, i4, s3, e3, h3) {
      super(t4, i4, s3, e3, h3), this.type = 5;
    }
    _$AI(t4, i4 = this) {
      if ((t4 = S(this, t4, i4, 0) ?? E) === T) return;
      const s3 = this._$AH, e3 = t4 === E && s3 !== E || t4.capture !== s3.capture || t4.once !== s3.once || t4.passive !== s3.passive, h3 = t4 !== E && (s3 === E || e3);
      e3 && this.element.removeEventListener(this.name, this, s3), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var z = class {
    constructor(t4, i4, s3) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s3;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      S(this, t4);
    }
  };
  var Z = { M: e, P: h, A: o, C: 1, L: V, R: M, D: u, V: S, I: R, H: k, N: I, U: L, B: H, F: z };
  var j = t.litHtmlPolyfillSupport;
  j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.0");
  var B = (t4, i4, s3) => {
    const e3 = s3?.renderBefore ?? i4;
    let h3 = e3._$litPart$;
    if (void 0 === h3) {
      const t5 = s3?.renderBefore ?? null;
      e3._$litPart$ = h3 = new R(i4.insertBefore(l(), t5), t5, void 0, s3 ?? {});
    }
    return h3._$AI(t4), h3;
  };

  // node_modules/lit-html/private-ssr-support.js
  var r2 = null;
  var i2 = { boundAttributeSuffix: Z.M, marker: Z.P, markerMatch: Z.A, HTML_RESULT: Z.C, getTemplateHtml: Z.L, overrideDirectiveResolve: (e3, t4) => class extends e3 {
    _$AS(e4, r3) {
      return t4(this, r3);
    }
  }, patchDirectiveResolve: (e3, t4) => {
    if (e3.prototype._$AS !== t4) {
      r2 ??= e3.prototype._$AS.name;
      for (let i4 = e3.prototype; i4 !== Object.prototype; i4 = Object.getPrototypeOf(i4)) if (i4.hasOwnProperty(r2)) return void (i4[r2] = t4);
      throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527");
    }
  }, setDirectiveClass(e3, t4) {
    e3._$litDirective$ = t4;
  }, getAttributePartCommittedValue: (e3, r3, i4) => {
    let o2 = T;
    return e3.j = (e4) => o2 = e4, e3._$AI(r3, e3, i4), o2;
  }, connectedDisconnectable: (e3) => ({ ...e3, _$AU: true }), resolveDirective: Z.V, AttributePart: Z.H, PropertyPart: Z.B, BooleanAttributePart: Z.N, EventPart: Z.U, ElementPart: Z.F, TemplateInstance: Z.R, isIterable: Z.D, ChildPart: Z.I };

  // node_modules/lit-html/directive.js
  var t2 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };

  // node_modules/lit-html/directive-helpers.js
  var { I: t3 } = Z;
  var i3 = (o2) => null === o2 || "object" != typeof o2 && "function" != typeof o2;
  var e2 = (o2, t4) => void 0 === t4 ? void 0 !== o2?._$litType$ : o2?._$litType$ === t4;
  var l2 = (o2) => null != o2?._$litType$?.h;
  var f2 = (o2) => void 0 === o2.strings;

  // node_modules/@lit-labs/ssr-client/lib/hydrate-lit-html.js
  var { TemplateInstance: l3, isIterable: s2, resolveDirective: d2, ChildPart: c2, ElementPart: p2 } = i2;
  var f3 = (e3, t4, r3 = {}) => {
    if (void 0 !== t4._$litPart$) throw Error("container already contains a live render");
    let n2, o2, i4;
    const a2 = [], l4 = document.createTreeWalker(t4, NodeFilter.SHOW_COMMENT);
    let s3;
    for (; null !== (s3 = l4.nextNode()); ) {
      const t5 = s3.data;
      if (t5.startsWith("lit-part")) {
        if (0 === a2.length && void 0 !== n2) throw Error(`There must be only one root part per container. Found a part marker (${s3}) when we already have a root part marker (${o2})`);
        i4 = m2(e3, s3, a2, r3), void 0 === n2 && (n2 = i4), o2 ??= s3;
      } else if (t5.startsWith("lit-node")) u2(s3, a2, r3);
      else if (t5.startsWith("/lit-part")) {
        if (1 === a2.length && i4 !== n2) throw Error("internal error");
        i4 = h2(s3, i4, a2);
      }
    }
    if (void 0 === n2) {
      const e4 = t4 instanceof ShadowRoot ? "{container.host.localName}'s shadow root" : t4 instanceof DocumentFragment ? "DocumentFragment" : t4.localName;
      console.error(`There should be exactly one root part in a render container, but we didn't find any in ${e4}.`);
    }
    t4._$litPart$ = n2;
  };
  var m2 = (t4, r3, a2, p3) => {
    let f4, m3;
    if (0 === a2.length) m3 = new c2(r3, null, void 0, p3), f4 = t4;
    else {
      const e3 = a2[a2.length - 1];
      if ("template-instance" === e3.type) m3 = new c2(r3, null, e3.instance, p3), e3.instance._$AV.push(m3), f4 = e3.result.values[e3.instancePartIndex++], e3.templatePartIndex++;
      else if ("iterable" === e3.type) {
        m3 = new c2(r3, null, e3.part, p3);
        const t5 = e3.iterator.next();
        if (t5.done) throw f4 = void 0, e3.done = true, Error("Unhandled shorter than expected iterable");
        f4 = t5.value, e3.part._$AH.push(m3);
      } else m3 = new c2(r3, null, e3.part, p3);
    }
    if (f4 = d2(m3, f4), f4 === T) a2.push({ part: m3, type: "leaf" });
    else if (i3(f4)) a2.push({ part: m3, type: "leaf" }), m3._$AH = f4;
    else if (e2(f4)) {
      if (l2(f4)) throw Error("compiled templates are not supported");
      const e3 = "lit-part " + w2(f4);
      if (r3.data !== e3) throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");
      {
        const e4 = c2.prototype._$AC(f4), t5 = new l3(e4, m3);
        a2.push({ type: "template-instance", instance: t5, part: m3, templatePartIndex: 0, instancePartIndex: 0, result: f4 }), m3._$AH = t5;
      }
    } else s2(f4) ? (a2.push({ part: m3, type: "iterable", value: f4, iterator: f4[Symbol.iterator](), done: false }), m3._$AH = []) : (a2.push({ part: m3, type: "leaf" }), m3._$AH = f4 ?? "");
    return m3;
  };
  var h2 = (e3, t4, r3) => {
    if (void 0 === t4) throw Error("unbalanced part marker");
    t4._$AB = e3;
    const n2 = r3.pop();
    if ("iterable" === n2.type && !n2.iterator.next().done) throw Error("unexpected longer than expected iterable");
    if (r3.length > 0) return r3[r3.length - 1].part;
  };
  var u2 = (e3, t4, n2) => {
    const o2 = /lit-node (\d+)/.exec(e3.data), i4 = parseInt(o2[1]), l4 = e3.nextElementSibling;
    if (null === l4) throw Error("could not find node for attribute parts");
    l4.removeAttribute("defer-hydration");
    const s3 = t4[t4.length - 1];
    if ("template-instance" !== s3.type) throw Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.");
    {
      const e4 = s3.instance;
      for (; ; ) {
        const t5 = e4._$AD.parts[s3.templatePartIndex];
        if (void 0 === t5 || t5.type !== t2.ATTRIBUTE && t5.type !== t2.ELEMENT || t5.index !== i4) break;
        if (t5.type === t2.ATTRIBUTE) {
          const o3 = new t5.ctor(l4, t5.name, t5.strings, s3.instance, n2), i5 = f2(o3) ? s3.result.values[s3.instancePartIndex] : s3.result.values, d3 = !(o3.type === t2.EVENT || o3.type === t2.PROPERTY);
          o3._$AI(i5, o3, s3.instancePartIndex, d3), s3.instancePartIndex += t5.strings.length - 1, e4._$AV.push(o3);
        } else {
          const t6 = new p2(l4, s3.instance, n2);
          d2(t6, s3.result.values[s3.instancePartIndex++]), e4._$AV.push(t6);
        }
        s3.templatePartIndex++;
      }
    }
  };
  var w2 = (e3) => {
    const t4 = new Uint32Array(2).fill(5381);
    for (const r4 of e3.strings) for (let e4 = 0; e4 < r4.length; e4++) t4[e4 % 2] = 33 * t4[e4 % 2] ^ r4.charCodeAt(e4);
    const r3 = String.fromCharCode(...new Uint8Array(t4.buffer));
    return btoa(r3);
  };

  // node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js
  globalThis.litElementHydrateSupport = ({ LitElement: s3 }) => {
    const h3 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s3), "observedAttributes").get;
    Object.defineProperty(s3, "observedAttributes", { get() {
      return [...h3.call(this), "defer-hydration"];
    } });
    const e3 = s3.prototype.attributeChangedCallback;
    s3.prototype.attributeChangedCallback = function(t4, i4, s4) {
      "defer-hydration" === t4 && null === s4 && n2.call(this), e3.call(this, t4, i4, s4);
    };
    const n2 = s3.prototype.connectedCallback;
    s3.prototype.connectedCallback = function() {
      this.hasAttribute("defer-hydration") || n2.call(this);
    };
    const o2 = s3.prototype.createRenderRoot;
    s3.prototype.createRenderRoot = function() {
      return this.shadowRoot ? (this._$AG = true, this.shadowRoot) : o2.call(this);
    };
    const r3 = Object.getPrototypeOf(s3.prototype).update;
    s3.prototype.update = function(s4) {
      const h4 = this.render();
      if (r3.call(this, s4), this._$AG) {
        this._$AG = false;
        for (let t4 = 0; t4 < this.attributes.length; t4++) {
          const i4 = this.attributes[t4];
          if (i4.name.startsWith("hydrate-internals-")) {
            const t5 = i4.name.slice(18);
            this.removeAttribute(t5), this.removeAttribute(i4.name);
          }
        }
        f3(h4, this.renderRoot, this.renderOptions);
      } else B(h4, this.renderRoot, this.renderOptions);
    };
  };
})();
/*! Bundled license information:

lit-html/lit-html.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/private-ssr-support.js:
@lit-labs/ssr-client/lib/hydrate-lit-html.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
