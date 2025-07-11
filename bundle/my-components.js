(() => {
  var __freeze = Object.freeze;
  var __defProp = Object.defineProperty;
  var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e4, o5) {
      if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s4 && 1 === s4.length;
        e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const o5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s4, o6) => e5 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t3[o6 + 1], t3[0]);
    return new n(o5, t3, s);
  };
  var S = (s4, o5) => {
    if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e4 of o5) {
      const o6 = document.createElement("style"), n4 = t.litNonce;
      void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
    }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s4 of t4.cssRules) e4 += s4.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s4) => t3;
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i5 = t3;
    switch (s4) {
      case Boolean:
        i5 = null !== t3;
        break;
      case Number:
        i5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t3);
        } catch (t4) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t3, s4) => !i2(t3, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
        void 0 !== h3 && e2(this.prototype, t3, h3);
      }
    }
    static getPropertyDescriptor(t3, s4, i5) {
      const { get: e4, set: r4 } = h(this.prototype, t3) ?? { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get: e4, set(s5) {
        const h3 = e4?.call(this);
        r4?.call(this, s5), this.requestUpdate(t3, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
        for (const i5 of s4) this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s4 = litPropertyMetadata.get(t3);
        if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i5 = this._$Eu(t4, s4);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e4 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e4) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t3, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$EO?.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s4, i5) {
      this._$AK(t3, i5);
    }
    _$ET(t3, s4) {
      const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e4 && true === i5.reflect) {
        const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      const i5 = this.constructor, e4 = i5._$Eh.get(t3);
      if (void 0 !== e4 && this._$Em !== e4) {
        const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e4;
        const r4 = h3.fromAttribute(s4, t4.type);
        this[e4] = r4 ?? this._$Ej?.get(e4) ?? r4, this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i5) {
      if (void 0 !== t3) {
        const e4 = this.constructor, h3 = this[t3];
        if (i5 ??= e4.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(e4._$Eu(t3, i5)))) return;
        this.C(t3, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
      i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r4 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t5, s5] of this._$Ep) this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s5, i5] of t4) {
          const { wrapped: t5 } = i5, e4 = this[s5];
          true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
        }
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t3 = false, this._$EM(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.1");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var a2 = Array.isArray;
  var u2 = (t3) => a2(t3) || "function" == typeof t3?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t3, i5) {
    if (!a2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var V = (t3, i5) => {
    const s4 = t3.length - 1, o5 = [];
    let r4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t3[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r4 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r4 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r4 = void 0);
      const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o5.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o5];
  };
  var N = class _N {
    constructor({ strings: t3, _$litType$: s4 }, n4) {
      let r4;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = V(t3, s4);
      if (this.el = _N.createElement(f3, n4), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r4 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r4.nodeType) {
          if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r4.getAttribute(t4).split(h2), e4 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e4[2], strings: s5, ctor: "." === e4[1] ? H : "?" === e4[1] ? I : "@" === e4[1] ? L : k }), r4.removeAttribute(t4);
          } else t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r4.removeAttribute(t4));
          if ($.test(r4.tagName)) {
            const t4 = r4.textContent.split(h2), s5 = t4.length - 1;
            if (s5 > 0) {
              r4.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r4.append(t4[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r4.append(t4[s5], l2());
            }
          }
        } else if (8 === r4.nodeType) if (r4.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = r4.data.indexOf(h2, t4 + 1)); ) d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t3, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function S2(t3, i5, s4 = t3, e4) {
    if (i5 === T) return i5;
    let h3 = void 0 !== e4 ? s4._$Co?.[e4] : s4._$Cl;
    const o5 = c3(i5) ? void 0 : i5._$litDirective$;
    return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? (s4._$Co ??= [])[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
  }
  var M = class {
    constructor(t3, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? r3).importNode(i5, true);
      C.currentNode = e4;
      let h3 = C.nextNode(), o5 = 0, n4 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o5 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new z(h3, this, t3)), this._$AV.push(i6), l3 = s4[++n4];
        }
        o5 !== l3?.index && (h3 = C.nextNode(), o5++);
      }
      return C.currentNode = r3, e4;
    }
    p(t3) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i5, s4, e4) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = S2(this, t3, i5), c3(t3) ? t3 === E || null == t3 || "" === t3 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : u2(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(r3.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e4) this._$AH.p(i5);
      else {
        const t4 = new M(e4, this), s5 = t4.u(this.options);
        t4.p(i5), this.T(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = A.get(t3.strings);
      return void 0 === i5 && A.set(t3.strings, i5 = new N(t3)), i5;
    }
    k(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e4 = 0;
      for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
      e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s4, e4, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t3, i5 = this, s4, e4) {
      const h3 = this.strings;
      let o5 = false;
      if (void 0 === h3) t3 = S2(this, t3, i5, 0), o5 = !c3(t3) || t3 !== this._$AH && t3 !== T, o5 && (this._$AH = t3);
      else {
        const e5 = t3;
        let n4, r4;
        for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = S2(this, e5[s4 + n4], i5, n4), r4 === T && (r4 = this._$AH[n4]), o5 ||= !c3(r4) || r4 !== this._$AH[n4], r4 === E ? t3 = E : t3 !== E && (t3 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
      }
      o5 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === E ? void 0 : t3;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
    }
  };
  var L = class extends k {
    constructor(t3, i5, s4, e4, h3) {
      super(t3, i5, s4, e4, h3), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      if ((t3 = S2(this, t3, i5, 0) ?? E) === T) return;
      const s4 = this._$AH, e4 = t3 === E && s4 !== E || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== E && (s4 === E || e4);
      e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var z = class {
    constructor(t3, i5, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      S2(this, t3);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ??= []).push("3.3.1");
  var B = (t3, i5, s4) => {
    const e4 = s4?.renderBefore ?? i5;
    let h3 = e4._$litPart$;
    if (void 0 === h3) {
      const t4 = s4?.renderBefore ?? null;
      e4._$litPart$ = h3 = new R(i5.insertBefore(l2(), t4), t4, void 0, s4 ?? {});
    }
    return h3._$AI(t3), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const r4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(r4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.1");

  // _components/my-section.js
  var MySection = class extends i4 {
    static styles = i`
    :host {
      display: block;
      margin-left: calc(var(--content-subtitle-max-width) * -1);
    }

    :host * {
      box-sizing: border-box;
    }

    :host > section {
      display: flex;
      width: 100%;
    }

    .content {
      max-width: var(--content-max-width);
      width: 100%;
    }

    .subtitle {
      min-width: var(--content-subtitle-max-width);
      max-width: var(--content-subtitle-max-width);
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      padding-right: 1em;
      text-align: right;

      font-family: var(--subtitle-font-family);
      font-size: 1rem;
      text-transform: lowercase;
    }

    @media(width < 970px) {
      :host {
        margin-left: 0;
      }

      :host > section {
        display: block;
      }

      .subtitle {
        min-width: unset;
        max-width: unset;
        text-align: left;
      }
    }

    ::slotted(*) {
      margin-top: 0;
    }
  `;
    // eslint-disable-next-line class-methods-use-this
    render() {
      return x`
      <section>
        <div class="subtitle">
          <slot name="subtitle"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </section>
    `;
    }
  };
  customElements.define("my-section", MySection);

  // _components/my-hero.js
  var MyHeroHeader = class extends i4 {
    static styles = i`
    :host {
      display: block;
    }

    h1 {
      font-size: 5rem;
      text-transform: uppercase;

      padding-bottom: 10px;
      margin: 0;
    }

    .description {
      font-size: 1.6rem;
      margin: 0;
    }

    @media(max-width: 500px) {
      h1 {
        font-size: 4rem;
      }
    }
  `;
    // eslint-disable-next-line class-methods-use-this
    render() {
      return x`
      <h1><slot name="title">Hero Header Title</slot></h1>
      <my-section>
        <p class="description"><slot name="description">Hero header description</slot></p>
      </my-section>
    `;
    }
  };
  customElements.define("my-hero", MyHeroHeader);

  // _components/my-nav.js
  var MyNavigationBar = class _MyNavigationBar extends i4 {
    static styles = i`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--subtitle-font-family);
      font-size: 12pt;
    }

    @media (width < 650px) {
      :host {
        align-items: flex-start;
      }
    }

    a {
      color: white;
      padding: 0;
      margin: 0;
    }

    .main {
      display: flex;
      align-items: center;
      min-width: max-content;
      gap: 0.5em;
    }

    .main img.logo {
      height: 30px;
    }

    .socials {
      display: flex;
      height: 100%;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      text-transform: lowercase;
      gap: 0.5em 1.5em;
    }

    .social a {
      display: flex;
      align-items: center;
      gap: 0.2em;
    }

    .social img.icon {
      height: 0.8em;
    }

    @media (width < 650px) {
      .socials {
        padding-top: 0.7em;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  `;
    static properties = {
      email: { attribute: "email" },
      twitter: { attribute: "twitter" },
      mastodon: { attribute: "mastodon" },
      bluesky: { attribute: "bluesky" },
      rss: { attribute: "rss" },
      location: { attribute: "location" }
    };
    static renderSocial(type, link, label) {
      return x`
      <div class="social">
        <a href="${link}" title="RSS">
          <img src="/images/${type}.svg" class="icon" alt="${type} label">
          ${label}
        </a>
      </div>`;
    }
    render() {
      return x`
      <div class="main">
        <a href="/"><img src="/images/logo.svg" class="logo" alt="Grisly Eye Games logo"></a>
        <span>
          <a href="/"><slot name="name"></slot></a> | <a href="/"><slot name="title"></slot></a>
        </span>
      </div>

      <div class="socials">
        <div class="social">
            <img src="/images/location.svg" class="icon" alt="Location icon"> <span id="location">${this.location}</span>
        </div>

        ${this.email ? _MyNavigationBar.renderSocial("email", this.email, "Mailing List") : x``}

        ${this.twitter ? _MyNavigationBar.renderSocial("twitter", this.twitter, "Twitter") : x``}

        ${this.bluesky ? _MyNavigationBar.renderSocial("bluesky", this.bluesky, "Bluesky") : x``}

        ${this.mastodon ? _MyNavigationBar.renderSocial("mastodon", this.mastodon, "Mastodon") : x``}

        ${this.rss ? _MyNavigationBar.renderSocial("rss", this.rss, "RSS") : x``}
      </div>
    `;
    }
  };
  customElements.define("my-nav", MyNavigationBar);

  // _components/my-page.js
  var MyPage = class extends i4 {
    static styles = i`
    :host {
      display: block;
    }

    h1.title {
      font-size: 5rem;
      text-transform: uppercase;
      line-height: 1;
      padding-bottom: 10px;
      margin: 0;
      word-wrap:break-word;
    }

    @media(max-width: 500px) {
      h1.title {
        font-size: 4rem;
      }
    }

    @media(max-width: 400px) {
      h1.title {
        font-size: 3rem;
      }
    }
  `;
    static properties = {
      name: { attribute: "name" }
    };
    render() {
      return x`
      <h1 class="title">
        ${this.renderTitle()}
      </h1>
      <my-section>
        <div slot="subtitle"><slot name="subtitle"></slot></div>
        <slot></slot>
      </my-section>
    `;
    }
    renderTitle() {
      const [first, ...tail] = this.name.split(" ");
      if (first && tail) {
        return x`${first} <br> ${tail.join(" ")}`;
      }
      return this.name;
    }
  };
  customElements.define("my-page", MyPage);

  // _components/my-preview.js
  var MyPreview = class _MyPreview extends i4 {
    static styles = i`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      background-size: cover;
      background-position: top;
      border-radius: 6px;

      line-height: 1;
    }

    header {
      display: flex;
      height: 100%;
      margin: 0;
      padding: 0;
      flex-direction: column;
      justify-content: space-between;
    }

    header h1 {
      font-size: 1.6rem;
      overflow: hidden;
      overflow-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      margin: 10px 10px 0 10px;
      padding: 0 0 5px 0;
    }

    header p {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: capitalize;
      margin: 10px;
      padding: 0;
    }

    /* products mode */
    :host(.products[background]) {
      --text-shadow-color: white;
      color: black;
      text-shadow:
        1px 1px 0 var(--text-shadow-color),
        -1px 1px 0 var(--text-shadow-color),
        -1px -1px 0 var(--text-shadow-color),
        1px -1px 0 var(--text-shadow-color);
    }

    :host(.products[background]) header h1 {
      visibility: hidden;
    }

    /* empty background mode */
    :host(:not([background])) {
      background-color: grey;
      color: white;
    }

    /* bloody theme */
    :host(.bloody[background]:not(.products)) header {
      color: white;
    }

    /* light theme */
    :host(.light[background]:not(.products)) h1,
    :host(.light[background]:not(.products)) p {
      color: black;
    }

    /* dark theme */
    :host(.dark[background]:not(.products)) {
      color: white;
    }
  `;
    static properties = {
      class: { attribute: "class" },
      backgroundSrc: { attribute: "background" },
      preload: { attribute: "preload", type: Boolean }
    };
    static Book = "book";
    static Article = "article";
    get hostStyle() {
      return this.renderRoot.querySelector(".container").style;
    }
    get backgroundImage() {
      if (this.backgroundSrc) {
        if (this.class.includes("light") && this.type !== _MyPreview.Book) {
          return `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${this.backgroundSrc}')`;
        }
        return `url('${this.backgroundSrc}')`;
      }
      return "";
    }
    get backgroundBlendMode() {
      if (this.type === _MyPreview.Book) return "none";
      if (this.class.includes("dark")) return "darken, difference";
      if (this.class.includes("light")) return "lighten, difference";
      return "darken";
    }
    get backgroundColour() {
      if (this.type === _MyPreview.Book) return "none";
      if (this.class.includes("dark")) return "grey";
      if (this.class.includes("light")) return "white";
      return "red";
    }
    onVisible() {
      if (!this.hostStyle.backgroundImage) {
        if (this.type !== _MyPreview.Book && this.backgroundSrc) {
          this.hostStyle.backgroundImage = this.backgroundImage;
          this.hostStyle.backgroundColor = this.backgroundColour;
          this.hostStyle.backgroundBlendMode = this.backgroundBlendMode;
        } else if (this.backgroundSrc) {
          this.hostStyle.backgroundImage = this.backgroundImage;
        }
      }
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.preload) {
        this.visibilityObserver = new IntersectionObserver((entries) => {
          entries.forEach(() => {
            if (entries[0].intersectionRatio <= 0) return;
            this.onVisible();
          });
        });
        this.visibilityObserver.observe(this);
      }
    }
    get type() {
      if (this.class.includes("product")) return _MyPreview.Book;
      if (this.class.includes("post")) return _MyPreview.Article;
      return void 0;
    }
    render() {
      return x`
      <div class="container" style="${this.renderBackgroundStyle()}">
        <header>
          <h1><slot name='title'>Preview Title</slot></h1>
          <p>${this.type}</p>
        </header>
      </div>
    `;
    }
    renderBackgroundStyle() {
      if (this.preload) {
        return `
        background-image: ${this.backgroundImage};
        background-color: ${this.backgroundColour};
        background-blend-mode: ${this.backgroundBlendMode};
      `;
      }
      return "";
    }
  };
  customElements.define("my-preview", MyPreview);

  // _components/my-button.js
  var MyButton = class extends i4 {
    static styles = i`
    ::slotted(button) {
      font-family: var(--font-family);
      height: 38px;
      padding: 0 30px;
      color: black;
      background-color: white;
      font-size: 14px;
      font-style: normal;
      font-weight: bold;
      border-radius: 4px;
      border: 1px solid #bbb;
      cursor: pointer;
      box-sizing: border-box;
      line-height: 38px;
      text-transform: uppercase;
      text-decoration: none;
      white-space: nowrap;
      text-align: center;
    }

    ::slotted(button:hover) {
      background-color: lightgrey;
    }

    :host(.small) ::slotted(button) {
      font-size: 10pt;
      padding: 0 15px;
    }

    .disabled.button ::slotted(button) {
      pointer-events: none;
      background-color: grey;
      color: lightgrey;
    }`;
    static properties = {
      disabled: { attribute: "disabled", type: Boolean }
    };
    render() {
      return x`
      <div class="button ${this.disabled ? "disabled" : ""}">
        <slot></slot>
      </div>`;
    }
  };
  customElements.define("my-button", MyButton);

  // _components/my-product.js
  var MyProduct = class extends i4 {
    static styles = i`
    :host {
      display: block;
      padding-bottom: 1em;
    }

    .call.box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5em;
    }

    .price {
      margin: 0;
      padding: 0;
      font-style: normal;
      font-weight: bold;
      color: white;
      line-height: 1;
    }

    .notes {
      font-style: italic;
    }

    .disabled a {
      pointer-events: none;
      cursor: default;
    }
  `;
    static properties = {
      call: { attribute: "call", type: String },
      currency: { attribute: "currency", type: String },
      price: { attribute: "price", type: String },
      src: { attribute: "src", type: String },
      notes: { attribute: "notes", type: Array }
    };
    render() {
      return x`
      <div class="call box">
        <div class="call button">
          <a href="${this.src}">
            <my-button class="small">
              <button>${this.call}</button>
            </my-button>
          </a>
        </div>

        <span class="price">${this.currency}${this.price}</span>

        <span class="notes">${this.notes ? this.renderNotes() : x``}</span>
      </div>
    `;
    }
    renderNotes() {
      return x`(${this.notes.join(", ")})`;
    }
  };
  customElements.define("my-product", MyProduct);

  // _components/my-shares.js
  var _a;
  var MyShares = class extends i4 {
    static styles = i`
    :host {
      display: inline;
      cursor: pointer;
    }

    :host([native]) .shares {
      display: none;
    }

    a {
      color: inherit;
      text-decoration: inherit;
      cursor: inherit;
    }

    .share {
      padding-left: 0.1em;
      padding-right: 0.1em;
    }

    img.icon {
      padding-top: 0.2em;
      height: 0.8rem;
      filter: brightness(0) invert(1);
    }

    share-on-mastodon {
      text-align: left;
      text-transform: none;
    }
  `;
    static properties = {
      title: { attribute: "title" },
      href: { attribute: "href" }
    };
    render() {
      return x(_a || (_a = __template(['\n      <script type="module" src="/vendor/@micahilbery/share-on-mastodon/share-on-mastodon.js"><\/script>\n      <div class="shares">\n        <a\n          class="share"\n          title="Share on Twitter"\n          href="https://twitter.com/intent/tweet/?url=', "&text=", '&via=grislyeye"\n          target="_blank"\n        >\n          <img src="/images/twitter.svg" class="icon" alt="Twitter icon">\n        </a>\n\n        <a\n          class="share"\n          title="Share on Facebook"\n          href="https://facebook.com/sharer/sharer.php?u=', '"\n          target="_blank"\n        >\n          <img src="/images/facebook.svg" class="icon" alt="Facebook icon">\n        </a>\n\n        <a\n          class="share"\n          title="Share on Tumblr"\n          href="https://tumblr.com/widgets/share/tool?canonicalUrl=', "&amp;tags=&amp;caption=", '"\n          target="_blank"\n        >\n          <img src="/images/tumblr.svg" class="icon" alt="Tumblr icon">\n        </a>\n\n        <share-on-mastodon\n          data-share-title="', '"\n          data-author="@grislyeye@c.im"\n        >\n          <img slot="button" src="/images/mastodon.svg" class="icon" alt="Mastodon icon">\n        </share-on-mastodon>\n      </div>\n    '])), this.href, this.title, this.href, this.href, this.title, this.title);
    }
  };
  customElements.define("my-shares", MyShares);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
