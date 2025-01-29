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
    constructor(t2, e3, o3) {
      if (this._$cssResult$ = true, o3 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e3;
    }
    get styleSheet() {
      let t2 = this.o;
      const s2 = this.t;
      if (e && void 0 === t2) {
        const e3 = void 0 !== s2 && 1 === s2.length;
        e3 && (t2 = o.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e3 && o.set(s2, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t2) => new n("string" == typeof t2 ? t2 : t2 + "", void 0, s);
  var i = (t2, ...e3) => {
    const o3 = 1 === t2.length ? t2[0] : e3.reduce((e4, s2, o4) => e4 + ((t3) => {
      if (true === t3._$cssResult$) return t3.cssText;
      if ("number" == typeof t3) return t3;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t2[o4 + 1], t2[0]);
    return new n(o3, t2, s);
  };
  var S = (s2, o3) => {
    if (e) s2.adoptedStyleSheets = o3.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
    else for (const e3 of o3) {
      const o4 = document.createElement("style"), n4 = t.litNonce;
      void 0 !== n4 && o4.setAttribute("nonce", n4), o4.textContent = e3.cssText, s2.appendChild(o4);
    }
  };
  var c = e ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e3 = "";
    for (const s2 of t3.cssRules) e3 += s2.cssText;
    return r(e3);
  })(t2) : t2;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t2, s2) => t2;
  var u = { toAttribute(t2, s2) {
    switch (s2) {
      case Boolean:
        t2 = t2 ? l : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, s2) {
    let i3 = t2;
    switch (s2) {
      case Boolean:
        i3 = null !== t2;
        break;
      case Number:
        i3 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i3 = JSON.parse(t2);
        } catch (t3) {
          i3 = null;
        }
    }
    return i3;
  } };
  var f = (t2, s2) => !i2(t2, s2);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t2) {
      this._$Ei(), (this.l ??= []).push(t2);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t2, s2 = y) {
      if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t2, s2), !s2.noAccessor) {
        const i3 = Symbol(), r3 = this.getPropertyDescriptor(t2, i3, s2);
        void 0 !== r3 && e2(this.prototype, t2, r3);
      }
    }
    static getPropertyDescriptor(t2, s2, i3) {
      const { get: e3, set: h4 } = r2(this.prototype, t2) ?? { get() {
        return this[s2];
      }, set(t3) {
        this[s2] = t3;
      } };
      return { get() {
        return e3?.call(this);
      }, set(s3) {
        const r3 = e3?.call(this);
        h4.call(this, s3), this.requestUpdate(t2, r3, i3);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t2) {
      return this.elementProperties.get(t2) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t2 = n2(this);
      t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t3 = this.properties, s2 = [...h(t3), ...o2(t3)];
        for (const i3 of s2) this.createProperty(i3, t3[i3]);
      }
      const t2 = this[Symbol.metadata];
      if (null !== t2) {
        const s2 = litPropertyMetadata.get(t2);
        if (void 0 !== s2) for (const [t3, i3] of s2) this.elementProperties.set(t3, i3);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t3, s2] of this.elementProperties) {
        const i3 = this._$Eu(t3, s2);
        void 0 !== i3 && this._$Eh.set(i3, t3);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i3 = [];
      if (Array.isArray(s2)) {
        const e3 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e3) i3.unshift(c(s3));
      } else void 0 !== s2 && i3.push(c(s2));
      return i3;
    }
    static _$Eu(t2, s2) {
      const i3 = s2.attribute;
      return false === i3 ? void 0 : "string" == typeof i3 ? i3 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
    }
    addController(t2) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
    }
    removeController(t2) {
      this._$EO?.delete(t2);
    }
    _$E_() {
      const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
      for (const i3 of s2.keys()) this.hasOwnProperty(i3) && (t2.set(i3, this[i3]), delete this[i3]);
      t2.size > 0 && (this._$Ep = t2);
    }
    createRenderRoot() {
      const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t2, this.constructor.elementStyles), t2;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
    }
    enableUpdating(t2) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t2) => t2.hostDisconnected?.());
    }
    attributeChangedCallback(t2, s2, i3) {
      this._$AK(t2, i3);
    }
    _$EC(t2, s2) {
      const i3 = this.constructor.elementProperties.get(t2), e3 = this.constructor._$Eu(t2, i3);
      if (void 0 !== e3 && true === i3.reflect) {
        const r3 = (void 0 !== i3.converter?.toAttribute ? i3.converter : u).toAttribute(s2, i3.type);
        this._$Em = t2, null == r3 ? this.removeAttribute(e3) : this.setAttribute(e3, r3), this._$Em = null;
      }
    }
    _$AK(t2, s2) {
      const i3 = this.constructor, e3 = i3._$Eh.get(t2);
      if (void 0 !== e3 && this._$Em !== e3) {
        const t3 = i3.getPropertyOptions(e3), r3 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u;
        this._$Em = e3, this[e3] = r3.fromAttribute(s2, t3.type), this._$Em = null;
      }
    }
    requestUpdate(t2, s2, i3) {
      if (void 0 !== t2) {
        if (i3 ??= this.constructor.getPropertyOptions(t2), !(i3.hasChanged ?? f)(this[t2], s2)) return;
        this.P(t2, s2, i3);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t2, s2, i3) {
      this._$AL.has(t2) || this._$AL.set(t2, s2), true === i3.reflect && this._$Em !== t2 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t2);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && await t2, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t4, s3] of this._$Ep) this[t4] = s3;
          this._$Ep = void 0;
        }
        const t3 = this.constructor.elementProperties;
        if (t3.size > 0) for (const [s3, i3] of t3) true !== i3.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i3);
      }
      let t2 = false;
      const s2 = this._$AL;
      try {
        t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach((t3) => t3.hostUpdate?.()), this.update(s2)) : this._$EU();
      } catch (s3) {
        throw t2 = false, this._$EU(), s3;
      }
      t2 && this._$AE(s2);
    }
    willUpdate(t2) {
    }
    _$AE(t2) {
      this._$EO?.forEach((t3) => t3.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t2) {
      return true;
    }
    update(t2) {
      this._$Ej &&= this._$Ej.forEach((t3) => this._$EC(t3, this[t3])), this._$EU();
    }
    updated(t2) {
    }
    firstUpdated(t2) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/lit-html/lit-html.js
  var n3 = globalThis;
  var c3 = n3.trustedTypes;
  var h2 = c3 ? c3.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0;
  var f2 = "$lit$";
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
  var S2 = /'/g;
  var j = /"/g;
  var M = /^(?:script|style|textarea|title)$/i;
  var P = (t2) => (i3, ...s2) => ({ _$litType$: t2, strings: i3, values: s2 });
  var ke = P(1);
  var Oe = P(2);
  var Se = P(3);
  var R = Symbol.for("lit-noChange");
  var D = Symbol.for("lit-nothing");
  var V = /* @__PURE__ */ new WeakMap();
  var I = w.createTreeWalker(w, 129);
  function N(t2, i3) {
    if (!g(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== h2 ? h2.createHTML(i3) : i3;
  }
  var U = (t2, i3) => {
    const s2 = t2.length - 1, e3 = [];
    let h4, o3 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", n4 = T;
    for (let i4 = 0; i4 < s2; i4++) {
      const s3 = t2[i4];
      let r3, l2, c4 = -1, a2 = 0;
      for (; a2 < s3.length && (n4.lastIndex = a2, l2 = n4.exec(s3), null !== l2); ) a2 = n4.lastIndex, n4 === T ? "!--" === l2[1] ? n4 = E : void 0 !== l2[1] ? n4 = k : void 0 !== l2[2] ? (M.test(l2[2]) && (h4 = RegExp("</" + l2[2], "g")), n4 = O) : void 0 !== l2[3] && (n4 = O) : n4 === O ? ">" === l2[0] ? (n4 = h4 ?? T, c4 = -1) : void 0 === l2[1] ? c4 = -2 : (c4 = n4.lastIndex - l2[2].length, r3 = l2[1], n4 = void 0 === l2[3] ? O : '"' === l2[3] ? j : S2) : n4 === j || n4 === S2 ? n4 = O : n4 === E || n4 === k ? n4 = T : (n4 = O, h4 = void 0);
      const u2 = n4 === O && t2[i4 + 1].startsWith("/>") ? " " : "";
      o3 += n4 === T ? s3 + _ : c4 >= 0 ? (e3.push(r3), s3.slice(0, c4) + f2 + s3.slice(c4) + v + u2) : s3 + v + (-2 === c4 ? i4 : u2);
    }
    return [N(t2, o3 + (t2[s2] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), e3];
  };
  var B = class _B {
    constructor({ strings: t2, _$litType$: i3 }, s2) {
      let e3;
      this.parts = [];
      let h4 = 0, o3 = 0;
      const n4 = t2.length - 1, r3 = this.parts, [l2, a2] = U(t2, i3);
      if (this.el = _B.createElement(l2, s2), I.currentNode = this.el.content, 2 === i3 || 3 === i3) {
        const t3 = this.el.content.firstChild;
        t3.replaceWith(...t3.childNodes);
      }
      for (; null !== (e3 = I.nextNode()) && r3.length < n4; ) {
        if (1 === e3.nodeType) {
          if (e3.hasAttributes()) for (const t3 of e3.getAttributeNames()) if (t3.endsWith(f2)) {
            const i4 = a2[o3++], s3 = e3.getAttribute(t3).split(v), n5 = /([.?@])?(.*)/.exec(i4);
            r3.push({ type: 1, index: h4, name: n5[2], strings: s3, ctor: "." === n5[1] ? Y : "?" === n5[1] ? Z : "@" === n5[1] ? q : G }), e3.removeAttribute(t3);
          } else t3.startsWith(v) && (r3.push({ type: 6, index: h4 }), e3.removeAttribute(t3));
          if (M.test(e3.tagName)) {
            const t3 = e3.textContent.split(v), i4 = t3.length - 1;
            if (i4 > 0) {
              e3.textContent = c3 ? c3.emptyScript : "";
              for (let s3 = 0; s3 < i4; s3++) e3.append(t3[s3], lt()), I.nextNode(), r3.push({ type: 2, index: ++h4 });
              e3.append(t3[i4], lt());
            }
          }
        } else if (8 === e3.nodeType) if (e3.data === m) r3.push({ type: 2, index: h4 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = e3.data.indexOf(v, t3 + 1)); ) r3.push({ type: 7, index: h4 }), t3 += v.length - 1;
        }
        h4++;
      }
    }
    static createElement(t2, i3) {
      const s2 = w.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  };
  function z(t2, i3, s2 = t2, e3) {
    if (i3 === R) return i3;
    let h4 = void 0 !== e3 ? s2.o?.[e3] : s2.l;
    const o3 = st(i3) ? void 0 : i3._$litDirective$;
    return h4?.constructor !== o3 && (h4?._$AO?.(false), void 0 === o3 ? h4 = void 0 : (h4 = new o3(t2), h4._$AT(t2, s2, e3)), void 0 !== e3 ? (s2.o ??= [])[e3] = h4 : s2.l = h4), void 0 !== h4 && (i3 = z(t2, h4._$AS(t2, i3.values), h4, e3)), i3;
  }
  var F = class {
    constructor(t2, i3) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i3 }, parts: s2 } = this._$AD, e3 = (t2?.creationScope ?? w).importNode(i3, true);
      I.currentNode = e3;
      let h4 = I.nextNode(), o3 = 0, n4 = 0, r3 = s2[0];
      for (; void 0 !== r3; ) {
        if (o3 === r3.index) {
          let i4;
          2 === r3.type ? i4 = new et(h4, h4.nextSibling, this, t2) : 1 === r3.type ? i4 = new r3.ctor(h4, r3.name, r3.strings, this, t2) : 6 === r3.type && (i4 = new K(h4, this, t2)), this._$AV.push(i4), r3 = s2[++n4];
        }
        o3 !== r3?.index && (h4 = I.nextNode(), o3++);
      }
      return I.currentNode = w, e3;
    }
    p(t2) {
      let i3 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i3), i3 += s2.strings.length - 2) : s2._$AI(t2[i3])), i3++;
    }
  };
  var et = class _et {
    get _$AU() {
      return this._$AM?._$AU ?? this.v;
    }
    constructor(t2, i3, s2, e3) {
      this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s2, this.options = e3, this.v = e3?.isConnected ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i3 = this._$AM;
      return void 0 !== i3 && 11 === t2?.nodeType && (t2 = i3.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i3 = this) {
      t2 = z(this, t2, i3), st(t2) ? t2 === D || null == t2 || "" === t2 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t2 !== this._$AH && t2 !== R && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : $(t2) ? this.k(t2) : this._(t2);
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
      const { values: i3, _$litType$: s2 } = t2, e3 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = B.createElement(N(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e3) this._$AH.p(i3);
      else {
        const t3 = new F(e3, this), s3 = t3.u(this.options);
        t3.p(i3), this.T(s3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i3 = V.get(t2.strings);
      return void 0 === i3 && V.set(t2.strings, i3 = new B(t2)), i3;
    }
    k(t2) {
      g(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s2, e3 = 0;
      for (const h4 of t2) e3 === i3.length ? i3.push(s2 = new _et(this.O(lt()), this.O(lt()), this, this.options)) : s2 = i3[e3], s2._$AI(h4), e3++;
      e3 < i3.length && (this._$AR(s2 && s2._$AB.nextSibling, e3), i3.length = e3);
    }
    _$AR(t2 = this._$AA.nextSibling, i3) {
      for (this._$AP?.(false, true, i3); t2 && t2 !== this._$AB; ) {
        const i4 = t2.nextSibling;
        t2.remove(), t2 = i4;
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
    constructor(t2, i3, s2, e3, h4) {
      this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e3, this.options = h4, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = D;
    }
    _$AI(t2, i3 = this, s2, e3) {
      const h4 = this.strings;
      let o3 = false;
      if (void 0 === h4) t2 = z(this, t2, i3, 0), o3 = !st(t2) || t2 !== this._$AH && t2 !== R, o3 && (this._$AH = t2);
      else {
        const e4 = t2;
        let n4, r3;
        for (t2 = h4[0], n4 = 0; n4 < h4.length - 1; n4++) r3 = z(this, e4[s2 + n4], i3, n4), r3 === R && (r3 = this._$AH[n4]), o3 ||= !st(r3) || r3 !== this._$AH[n4], r3 === D ? t2 = D : t2 !== D && (t2 += (r3 ?? "") + h4[n4 + 1]), this._$AH[n4] = r3;
      }
      o3 && !e3 && this.j(t2);
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
    constructor(t2, i3, s2, e3, h4) {
      super(t2, i3, s2, e3, h4), this.type = 5;
    }
    _$AI(t2, i3 = this) {
      if ((t2 = z(this, t2, i3, 0) ?? D) === R) return;
      const s2 = this._$AH, e3 = t2 === D && s2 !== D || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h4 = t2 !== D && (s2 === D || e3);
      e3 && this.element.removeEventListener(this.name, this, s2), h4 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  };
  var K = class {
    constructor(t2, i3, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      z(this, t2);
    }
  };
  var Re = n3.litHtmlPolyfillSupport;
  Re?.(B, et), (n3.litHtmlVersions ??= []).push("3.2.0");
  var Q = (t2, i3, s2) => {
    const e3 = s2?.renderBefore ?? i3;
    let h4 = e3._$litPart$;
    if (void 0 === h4) {
      const t3 = s2?.renderBefore ?? null;
      e3._$litPart$ = h4 = new et(i3.insertBefore(lt(), t3), t3, void 0, s2 ?? {});
    }
    return h4._$AI(t2), h4;
  };

  // node_modules/lit-element/lit-element.js
  var h3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
    }
    createRenderRoot() {
      const t2 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t2.firstChild, t2;
    }
    update(t2) {
      const e3 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this.o = Q(e3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this.o?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.o?.setConnected(false);
    }
    render() {
      return R;
    }
  };
  h3._$litElement$ = true, h3["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: h3 });
  var f3 = globalThis.litElementPolyfillSupport;
  f3?.({ LitElement: h3 });
  (globalThis.litElementVersions ??= []).push("4.1.0");

  // _components/my-section.js
  var MySection = class extends h3 {
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
      return ke`
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
  var MyHeroHeader = class extends h3 {
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
      return ke`
      <h1><slot name="title">Hero Header Title</slot></h1>
      <my-section>
        <p class="description"><slot name="description">Hero header description</slot></p>
      </my-section>
    `;
    }
  };
  customElements.define("my-hero", MyHeroHeader);

  // _components/my-nav.js
  var MyNavigationBar = class _MyNavigationBar extends h3 {
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
      return ke`
      <div class="social">
        <a href="${link}" title="RSS">
          <img src="/images/${type}.svg" class="icon" alt="${type} label">
          ${label}
        </a>
      </div>`;
    }
    render() {
      return ke`
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

        ${this.email ? _MyNavigationBar.renderSocial("email", this.email, "Mailing Lis") : ke``}

        ${this.twitter ? _MyNavigationBar.renderSocial("twitter", this.twitter, "Twitter") : ke``}

        ${this.bluesky ? _MyNavigationBar.renderSocial("bluesky", this.bluesky, "Bluesky") : ke``}

        ${this.mastodon ? _MyNavigationBar.renderSocial("mastodon", this.mastodon, "Mastodon") : ke``}

        ${this.rss ? _MyNavigationBar.renderSocial("rss", this.rss, "RSS") : ke``}
      </div>
    `;
    }
  };
  customElements.define("my-nav", MyNavigationBar);

  // _components/my-page.js
  var MyPage = class extends h3 {
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
      return ke`
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
        return ke`${first} <br> ${tail.join(" ")}`;
      }
      return this.name;
    }
  };
  customElements.define("my-page", MyPage);

  // _components/my-preview.js
  var MyPreview = class _MyPreview extends h3 {
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
      return ke`
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

  // _components/my-product.js
  var MyProduct = class extends h3 {
    static styles = i`
    :host {
      display: block;
    }

    :slotted(.picture) {
      width: 200px;
      height: auto;
    }

    .call.box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
    }

    ul.notes {
      padding: 0;
      margin: 0;
      max-width: 50%;
    }

    .notes li {
      color: white;
      font-size: 1rem;
      font-style: normal;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .price {
      float: left;
      margin: 0;
      padding: 0;
      font-size: 3rem;
      font-style: normal;
      font-weight: normal;
      color: white;
      line-height: 1;
    }

    .button {
      text-align: center;
      margin-top: 0.6rem;
    }

    @media (max-width: 500px) {
      :host {
        width: 100%;
        float: unset;
        display: block;
        margin-bottom: 2em;
      }
    }
  `;
    static properties = {
      product: { attribute: "product", type: String },
      title: { attribute: "title", type: String },
      call: { attribute: "call", type: String },
      currency: { attribute: "currency", type: String },
      price: { attribute: "price", type: String },
      src: { attribute: "src", type: String },
      notes: { attribute: "notes", type: Array },
      image: { attribute: "image", type: String },
      timezones: { attribute: "timezones", type: Array },
      disabled: { attribute: "disabled", type: Boolean }
    };
    connectedCallback() {
      super.connectedCallback();
      if (this.timezones) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const shipping = timezone && this.timezones.includes(timezone);
        const callButton = this.shadowRoot.querySelector("my-button");
        if (!shipping && callButton) {
          callButton.setAttribute("disabled", "true");
        }
      }
    }
    render() {
      return ke`
      <img
        class="product image"
        alt="${this.product} Cover"
        loading="lazy"
        decoding="async"
        src="${this.image}"
      >

      <div class="call box">
        <h2 class="price">${this.currency}${this.price}</h2>

        ${this.notes ? this.renderNotes() : ke``}

        <div class="call button">
          <a href="${this.src}">
            <button src="${this.src}" disabled="${this.disabled}">${this.call}</button>
          </a>
        </div>
      </div>
    `;
    }
    renderNotes() {
      return ke`
      <ul class="notes">
        ${this.notes.map((note) => ke`<li>${note}</li>`)}
      </ul>
    `;
    }
  };
  customElements.define("my-product", MyProduct);

  // _components/my-shares.js
  var _a;
  var MyShares = class extends h3 {
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
      return ke(_a || (_a = __template(['\n      <script type="module" src="/vendor/@micahilbery/share-on-mastodon/share-on-mastodon.js"><\/script>\n      <div class="shares">\n        <a\n          class="share"\n          title="Share on Twitter"\n          href="https://twitter.com/intent/tweet/?url=', "&text=", '&via=grislyeye"\n          target="_blank"\n        >\n          <img src="/images/twitter.svg" class="icon" alt="Twitter icon">\n        </a>\n\n        <a\n          class="share"\n          title="Share on Facebook"\n          href="https://facebook.com/sharer/sharer.php?u=', '"\n          target="_blank"\n        >\n          <img src="/images/facebook.svg" class="icon" alt="Facebook icon">\n        </a>\n\n        <a\n          class="share"\n          title="Share on Tumblr"\n          href="https://tumblr.com/widgets/share/tool?canonicalUrl=', "&amp;tags=&amp;caption=", '"\n          target="_blank"\n        >\n          <img src="/images/tumblr.svg" class="icon" alt="Tumblr icon">\n        </a>\n\n        <share-on-mastodon\n          data-share-title="', '"\n          data-author="@grislyeye@indieweb.social"\n        >\n          <img slot="button" src="/images/mastodon.svg" class="icon" alt="Mastodon icon">\n        </share-on-mastodon>\n      </div>\n    '])), this.href, this.title, this.href, this.href, this.title, this.title);
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
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

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
