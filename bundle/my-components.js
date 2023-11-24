(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e4, o4) {
      if (this._$cssResult$ = true, o4 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s5 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s5 && 1 === s5.length;
        e4 && (t3 = o.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s5, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const o4 = 1 === t3.length ? t3[0] : e4.reduce((e5, s5, o5) => e5 + ((t4) => {
      if (true === t4._$cssResult$)
        return t4.cssText;
      if ("number" == typeof t4)
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t3[o5 + 1], t3[0]);
    return new n(o4, t3, s);
  };
  var S = (s5, o4) => {
    if (e)
      s5.adoptedStyleSheets = o4.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else
      for (const e4 of o4) {
        const o5 = document.createElement("style"), n4 = t.litNonce;
        void 0 !== n4 && o5.setAttribute("nonce", n4), o5.textContent = e4.cssText, s5.appendChild(o5);
      }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s5 of t4.cssRules)
      e4 += s5.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s5) => t3;
  var u = { toAttribute(t3, s5) {
    switch (s5) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s5) {
    let i5 = t3;
    switch (s5) {
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
  var f = (t3, s5) => !i2(t3, s5);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s5 = y) {
      if (s5.state && (s5.attribute = false), this._$Ei(), this.elementProperties.set(t3, s5), !s5.noAccessor) {
        const i5 = Symbol(), r6 = this.getPropertyDescriptor(t3, i5, s5);
        void 0 !== r6 && e2(this.prototype, t3, r6);
      }
    }
    static getPropertyDescriptor(t3, s5, i5) {
      const { get: e4, set: h4 } = r2(this.prototype, t3) ?? { get() {
        return this[s5];
      }, set(t4) {
        this[s5] = t4;
      } };
      return { get() {
        return e4?.call(this);
      }, set(s6) {
        const r6 = e4?.call(this);
        h4.call(this, s6), this.requestUpdate(t3, r6, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties")))
        return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s5 = [...h(t4), ...o2(t4)];
        for (const i5 of s5)
          this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s5 = litPropertyMetadata.get(t3);
        if (void 0 !== s5)
          for (const [t4, i5] of s5)
            this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s5] of this.elementProperties) {
        const i5 = this._$Eu(t4, s5);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s5) {
      const i5 = [];
      if (Array.isArray(s5)) {
        const e4 = new Set(s5.flat(1 / 0).reverse());
        for (const s6 of e4)
          i5.unshift(c(s6));
      } else
        void 0 !== s5 && i5.push(c(s5));
      return i5;
    }
    static _$Eu(t3, s5) {
      const i5 = s5.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$Eg = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$E_ ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$E_?.delete(t3);
    }
    _$ES() {
      const t3 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
      for (const i5 of s5.keys())
        this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$E_?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$E_?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s5, i5) {
      this._$AK(t3, i5);
    }
    _$EO(t3, s5) {
      const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e4 && true === i5.reflect) {
        const r6 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s5, i5.type);
        this._$Em = t3, null == r6 ? this.removeAttribute(e4) : this.setAttribute(e4, r6), this._$Em = null;
      }
    }
    _$AK(t3, s5) {
      const i5 = this.constructor, e4 = i5._$Eh.get(t3);
      if (void 0 !== e4 && this._$Em !== e4) {
        const t4 = i5.getPropertyOptions(e4), r6 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e4, this[e4] = r6.fromAttribute(s5, t4.type), this._$Em = null;
      }
    }
    requestUpdate(t3, s5, i5, e4 = false, r6) {
      if (void 0 !== t3) {
        if (i5 ??= this.constructor.getPropertyOptions(t3), !(i5.hasChanged ?? f)(e4 ? r6 : this[t3], s5))
          return;
        this.C(t3, s5, i5);
      }
      false === this.isUpdatePending && (this._$Eg = this._$EP());
    }
    C(t3, s5, i5) {
      this._$AL.has(t3) || this._$AL.set(t3, s5), true === i5.reflect && this._$Em !== t3 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t3);
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$Eg;
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
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t5, s6] of this._$Ep)
            this[t5] = s6;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0)
          for (const [s6, i5] of t4)
            true !== i5.wrapped || this._$AL.has(s6) || void 0 === this[s6] || this.C(s6, this[s6], i5);
      }
      let t3 = false;
      const s5 = this._$AL;
      try {
        t3 = this.shouldUpdate(s5), t3 ? (this.willUpdate(s5), this._$E_?.forEach((t4) => t4.hostUpdate?.()), this.update(s5)) : this._$ET();
      } catch (s6) {
        throw t3 = false, this._$ET(), s6;
      }
      t3 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$E_?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$ET() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Eg;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Ej &&= this._$Ej.forEach((t4) => this._$EO(t4, this[t4])), this._$ET();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.2");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${(Math.random() + "").slice(9)}$`;
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
  var y2 = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
  var x = y2(1);
  var b2 = y2(2);
  var w = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var E = r3.createTreeWalker(r3, 129);
  function C(t3, i5) {
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var P = (t3, i5) => {
    const s5 = t3.length - 1, o4 = [];
    let r6, l3 = 2 === i5 ? "<svg>" : "", c4 = f2;
    for (let i6 = 0; i6 < s5; i6++) {
      const s6 = t3[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s6.length && (c4.lastIndex = y3, u3 = c4.exec(s6), null !== u3); )
        y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r6 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s6 + n3 : d3 >= 0 ? (o4.push(a3), s6.slice(0, d3) + e3 + s6.slice(d3) + h2 + x2) : s6 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [C(t3, l3 + (t3[s5] || "<?>") + (2 === i5 ? "</svg>" : "")), o4];
  };
  var V = class _V {
    constructor({ strings: t3, _$litType$: s5 }, n4) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = P(t3, s5);
      if (this.el = _V.createElement(f3, n4), E.currentNode = this.el.content, 2 === s5) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r6 = E.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes())
            for (const t4 of r6.getAttributeNames())
              if (t4.endsWith(e3)) {
                const i5 = v2[a3++], s6 = r6.getAttribute(t4).split(h2), e4 = /([.?@])?(.*)/.exec(i5);
                d3.push({ type: 1, index: c4, name: e4[2], strings: s6, ctor: "." === e4[1] ? k : "?" === e4[1] ? H : "@" === e4[1] ? I : R }), r6.removeAttribute(t4);
              } else
                t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t4));
          if ($.test(r6.tagName)) {
            const t4 = r6.textContent.split(h2), s6 = t4.length - 1;
            if (s6 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s6; i5++)
                r6.append(t4[i5], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t4[s6], l2());
            }
          }
        } else if (8 === r6.nodeType)
          if (r6.data === o3)
            d3.push({ type: 2, index: c4 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r6.data.indexOf(h2, t4 + 1)); )
              d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
          }
        c4++;
      }
    }
    static createElement(t3, i5) {
      const s5 = r3.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function N(t3, i5, s5 = t3, e4) {
    if (i5 === w)
      return i5;
    let h4 = void 0 !== e4 ? s5._$Co?.[e4] : s5._$Cl;
    const o4 = c3(i5) ? void 0 : i5._$litDirective$;
    return h4?.constructor !== o4 && (h4?._$AO?.(false), void 0 === o4 ? h4 = void 0 : (h4 = new o4(t3), h4._$AT(t3, s5, e4)), void 0 !== e4 ? (s5._$Co ??= [])[e4] = h4 : s5._$Cl = h4), void 0 !== h4 && (i5 = N(t3, h4._$AS(t3, i5.values), h4, e4)), i5;
  }
  var S2 = class {
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
      const { el: { content: i5 }, parts: s5 } = this._$AD, e4 = (t3?.creationScope ?? r3).importNode(i5, true);
      E.currentNode = e4;
      let h4 = E.nextNode(), o4 = 0, n4 = 0, l3 = s5[0];
      for (; void 0 !== l3; ) {
        if (o4 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new M(h4, h4.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h4, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new L(h4, this, t3)), this._$AV.push(i6), l3 = s5[++n4];
        }
        o4 !== l3?.index && (h4 = E.nextNode(), o4++);
      }
      return E.currentNode = r3, e4;
    }
    p(t3) {
      let i5 = 0;
      for (const s5 of this._$AV)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
    }
  };
  var M = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i5, s5, e4) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e4, this._$Cv = e4?.isConnected ?? true;
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
      t3 = N(this, t3, i5), c3(t3) ? t3 === T || null == t3 || "" === t3 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== w && this._(t3) : void 0 !== t3._$litType$ ? this.g(t3) : void 0 !== t3.nodeType ? this.$(t3) : u2(t3) ? this.T(t3) : this._(t3);
    }
    k(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    $(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.k(t3));
    }
    _(t3) {
      this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.$(r3.createTextNode(t3)), this._$AH = t3;
    }
    g(t3) {
      const { values: i5, _$litType$: s5 } = t3, e4 = "number" == typeof s5 ? this._$AC(t3) : (void 0 === s5.el && (s5.el = V.createElement(C(s5.h, s5.h[0]), this.options)), s5);
      if (this._$AH?._$AD === e4)
        this._$AH.p(i5);
      else {
        const t4 = new S2(e4, this), s6 = t4.u(this.options);
        t4.p(i5), this.$(s6), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = A.get(t3.strings);
      return void 0 === i5 && A.set(t3.strings, i5 = new V(t3)), i5;
    }
    T(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s5, e4 = 0;
      for (const h4 of t3)
        e4 === i5.length ? i5.push(s5 = new _M(this.k(l2()), this.k(l2()), this, this.options)) : s5 = i5[e4], s5._$AI(h4), e4++;
      e4 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e4), i5.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var R = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s5, e4, h4) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h4, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
    }
    _$AI(t3, i5 = this, s5, e4) {
      const h4 = this.strings;
      let o4 = false;
      if (void 0 === h4)
        t3 = N(this, t3, i5, 0), o4 = !c3(t3) || t3 !== this._$AH && t3 !== w, o4 && (this._$AH = t3);
      else {
        const e5 = t3;
        let n4, r6;
        for (t3 = h4[0], n4 = 0; n4 < h4.length - 1; n4++)
          r6 = N(this, e5[s5 + n4], i5, n4), r6 === w && (r6 = this._$AH[n4]), o4 ||= !c3(r6) || r6 !== this._$AH[n4], r6 === T ? t3 = T : t3 !== T && (t3 += (r6 ?? "") + h4[n4 + 1]), this._$AH[n4] = r6;
      }
      o4 && !e4 && this.O(t3);
    }
    O(t3) {
      t3 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    O(t3) {
      this.element[this.name] = t3 === T ? void 0 : t3;
    }
  };
  var H = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    O(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== T);
    }
  };
  var I = class extends R {
    constructor(t3, i5, s5, e4, h4) {
      super(t3, i5, s5, e4, h4), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      if ((t3 = N(this, t3, i5, 0) ?? T) === w)
        return;
      const s5 = this._$AH, e4 = t3 === T && s5 !== T || t3.capture !== s5.capture || t3.once !== s5.once || t3.passive !== s5.passive, h4 = t3 !== T && (s5 === T || e4);
      e4 && this.element.removeEventListener(this.name, this, s5), h4 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var L = class {
    constructor(t3, i5, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      N(this, t3);
    }
  };
  var Z = t2.litHtmlPolyfillSupport;
  Z?.(V, M), (t2.litHtmlVersions ??= []).push("3.1.0");
  var j = (t3, i5, s5) => {
    const e4 = s5?.renderBefore ?? i5;
    let h4 = e4._$litPart$;
    if (void 0 === h4) {
      const t4 = s5?.renderBefore ?? null;
      e4._$litPart$ = h4 = new M(i5.insertBefore(l2(), t4), t4, void 0, s5 ?? {});
    }
    return h4._$AI(t3), h4;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = j(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w;
    }
  };
  s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
  var r4 = globalThis.litElementPolyfillSupport;
  r4?.({ LitElement: s3 });
  (globalThis.litElementVersions ??= []).push("4.0.2");

  // _components/my-button.js
  var MyButton = class _MyButton extends s3 {
    static formAssociated = true;
    static styles = i`
    :host {
      display: inline-block;
    }

    .button {
      height: 38px;
      padding: 0 30px;
      color: white;
      background-color: red;
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

    .button a {
      color: inherit;
      text-decoration: inherit;
      cursor: inherit;
    }

    .button:hover {
      color: #2f3237;
    }

    :host([disabled="true"]) .button {
      opacity: 0.6;
      cursor: not-allowed;
    }

    :host([disabled="true"]) .button a {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.6;
    }
  `;
    static properties = {
      src: {
        attribute: "src",
        type: String
      },
      title: {
        attribute: "title",
        type: String
      },
      type: {
        attribute: "type",
        type: String
      }
    };
    static Type = {
      Submit: "submit"
    };
    connectedCallback() {
      super.connectedCallback();
      if (this.type === _MyButton.Type.Submit) {
        const internals = this.attachInternals();
        this.addEventListener("click", () => {
          const submit = new CustomEvent("submit");
          internals.form.dispatchEvent(submit);
        });
      }
    }
    render() {
      return x`
      <div class="button">
        ${this.type !== _MyButton.Type.Submit ? x`<a href="${this.src}">${this.title}</a>` : x`${this.title}`}
      </div>
    `;
    }
  };
  customElements.define("my-button", MyButton);

  // _components/my-section.js
  var MySection = class extends s3 {
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
      font-weight: bold;
      text-transform: lowercase;
    }

    @media(max-width: 890px) {
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

    ::slotted(p) {
      margin-top: 0;
    }
  `;
    static properties = {
      subtitle: { attribute: "subtitle" }
    };
    render() {
      return x`
      <section>
        <div class="subtitle">
          ${this.subtitle}
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
  var MyHeroHeader = class extends s3 {
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
    static properties = {
      subtitle: { attribute: "subtitle" }
    };
    render() {
      return x`
      <h1><slot name="title">Hero Header Title</slot></h1>
      <my-section subtitle="${this.subtitle}">
        <p class="description"><slot name="description">Hero header description</slot></p>
      </my-section>
    `;
    }
  };
  customElements.define("my-hero", MyHeroHeader);

  // _components/my-nav.js
  var MyNavigationBar = class extends s3 {
    static styles = i`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--subtitle-font-family);
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
      height: 1em;
    }
  `;
    static properties = {
      email: { attribute: "email" },
      twitter: { attribute: "twitter" },
      mastodon: { attribute: "mastodon" },
      rss: { attribute: "rss" },
      location: { attribute: "location" }
    };
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

        <div class="social">
          <a href="${this.email}" title="Mailing List">
            <img src="/images/email.svg" class="icon" alt="Email icon">
            Mailing List
          </a>
        </div>

        <div class="social">
          <a rel="me" href="${this.twitter}" title="Twitter">
            <img src="/images/twitter.svg" class="icon" alt="Twitter icon">
            Twitter
          </a>
        </div>

        <div class="social">
          <a rel="me" href="${this.mastodon}" title="Mastodon">
            <img src="/images/mastodon.svg" class="icon" alt="Mastodon icon">
            Mastodon
          </a>
        </div>

        <div class="social">
          <a href="${this.rss}" title="RSS">
            <img src="/images/rss.svg" class="icon" alt="RSS icon">
            RSS
          </a>
        </div>
      </div>
    `;
    }
  };
  customElements.define("my-nav", MyNavigationBar);

  // _components/my-page.js
  var MyPage = class extends s3 {
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
      title: { attribute: "title" },
      subtitle: { attribute: "subtitle" }
    };
    render() {
      return x`
      <h1 class="title">
        ${this.renderTitle()}
      </h1>
      <my-section subtitle="${this.subtitle}">
        <slot></slot>
      </my-section>
    `;
    }
    renderTitle() {
      const [first, ...tail] = this.title.split(" ");
      if (first && tail) {
        return x`${first} <br> ${tail.join(" ")}`;
      }
      return this.title;
    }
  };
  customElements.define("my-page", MyPage);

  // _components/my-preview.js
  var MyPreview = class _MyPreview extends s3 {
    static styles = i`
    :host {
      display: inline-block;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      background-size: cover;
      background-position: top;
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
      display: -webkit-box;
      font-size: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    header h1,
    header p {
      margin: 10px;
      padding: 0;
    }

    header p {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: capitalize;
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
    :host(.light[background]:not(.products)) h1 {
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
      if (this.class.includes("light") && this.type !== _MyPreview.Book) {
        return `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${this.backgroundSrc}')`;
      }
      return `url('${this.backgroundSrc}')`;
    }
    get backgroundBlendMode() {
      if (this.type === _MyPreview.Book)
        return "none";
      if (this.class.includes("dark"))
        return "darken, difference";
      if (this.class.includes("light"))
        return "lighten, difference";
      return "darken";
    }
    get backgroundColour() {
      if (this.type === _MyPreview.Book)
        return "none";
      if (this.class.includes("dark"))
        return "grey";
      if (this.class.includes("light"))
        return "white";
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
            if (entries[0].intersectionRatio <= 0)
              return;
            this.onVisible();
          });
        });
        this.visibilityObserver.observe(this);
      }
    }
    get type() {
      if (this.class.includes("product"))
        return _MyPreview.Book;
      if (this.class.includes("post"))
        return _MyPreview.Article;
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
        return `background-image: ${this.backgroundImage}; background-color: ${this.backgroundColour}; background-blend-mode: ${this.backgroundBlendMode};`;
      }
      return "";
    }
  };
  customElements.define("my-preview", MyPreview);

  // _components/my-product.js
  var MyProduct = class extends s3 {
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
      return x`
      <img
        class="product image"
        alt="${this.product} Cover"
        loading="lazy"
        decoding="async"
        src="${this.image}"
      >

      <div class="call box">
        <h2 class="price">${this.currency}${this.price}</h2>

        ${this.notes ? this.renderNotes() : x``}

        <div class="call button">
          <my-button title="${this.call}" src="${this.src}" disabled="${this.disabled}"></my-button>
        </div>
      </div>
    `;
    }
    renderNotes() {
      return x`
      <ul class="notes">
        ${this.notes.map((note) => x`<li>${note}</li>`)}
      </ul>
    `;
    }
  };
  customElements.define("my-product", MyProduct);

  // node_modules/@lit/task/task.js
  var i4 = Symbol();
  var h3 = class {
    get taskComplete() {
      return this.t || (1 === this.status ? this.t = new Promise((t3, s5) => {
        this.i = t3, this.o = s5;
      }) : 3 === this.status ? this.t = Promise.reject(this.h) : this.t = Promise.resolve(this.l)), this.t;
    }
    constructor(t3, s5, i5) {
      this.u = 0, this.status = 0, (this.p = t3).addController(this);
      const h4 = "object" == typeof s5 ? s5 : { task: s5, args: i5 };
      this._ = h4.task, this.v = h4.args, this.j = h4.argsEqual ?? r5, this.m = h4.onComplete, this.g = h4.onError, this.autoRun = h4.autoRun ?? true, "initialValue" in h4 && (this.l = h4.initialValue, this.status = 2, this.k = this.A?.());
    }
    hostUpdate() {
      true === this.autoRun && this.O();
    }
    hostUpdated() {
      "afterUpdate" === this.autoRun && this.O();
    }
    A() {
      if (void 0 === this.v)
        return;
      const t3 = this.v();
      if (!Array.isArray(t3))
        throw Error("The args function must return an array");
      return t3;
    }
    async O() {
      const t3 = this.A(), s5 = this.k;
      this.k = t3, t3 === s5 || void 0 === t3 || void 0 !== s5 && this.j(s5, t3) || await this.run(t3);
    }
    async run(t3) {
      let s5, h4;
      t3 ??= this.A(), this.k = t3, 1 === this.status ? this.T?.abort() : (this.t = void 0, this.i = void 0, this.o = void 0), this.status = 1, "afterUpdate" === this.autoRun ? queueMicrotask(() => this.p.requestUpdate()) : this.p.requestUpdate();
      const r6 = ++this.u;
      this.T = new AbortController();
      let e4 = false;
      try {
        s5 = await this._(t3, { signal: this.T.signal });
      } catch (t4) {
        e4 = true, h4 = t4;
      }
      if (this.u === r6) {
        if (s5 === i4)
          this.status = 0;
        else {
          if (false === e4) {
            try {
              this.m?.(s5);
            } catch {
            }
            this.status = 2, this.i?.(s5);
          } else {
            try {
              this.g?.(h4);
            } catch {
            }
            this.status = 3, this.o?.(h4);
          }
          this.l = s5, this.h = h4;
        }
        this.p.requestUpdate();
      }
    }
    abort(t3) {
      1 === this.status && this.T?.abort(t3);
    }
    get value() {
      return this.l;
    }
    get error() {
      return this.h;
    }
    render(t3) {
      switch (this.status) {
        case 0:
          return t3.initial?.();
        case 1:
          return t3.pending?.();
        case 2:
          return t3.complete?.(this.value);
        case 3:
          return t3.error?.(this.error);
        default:
          throw Error("Unexpected status: " + this.status);
      }
    }
  };
  var r5 = (s5, i5) => s5 === i5 || s5.length === i5.length && s5.every((s6, h4) => !f(s6, i5[h4]));

  // _components/my-mentions.js
  var MyMentions = class _MyMentions extends s3 {
    static styles = i`
    my-section {
      padding-top: 5rem;
    }

    #mentions {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  `;
    static urlConverter = {
      fromAttribute: (value) => new URL(value),
      toAttribute: (value) => value.toString()
    };
    static properties = {
      url: {
        attribute: "url",
        type: String,
        converter: _MyMentions.urlConverter
      },
      webmentions: {
        attribute: "webmentions",
        type: String,
        converter: _MyMentions.urlConverter
      }
    };
    static async webmentions([url, webmentions]) {
      async function feed() {
        webmentions.searchParams.delete("domain");
        webmentions.searchParams.append("domain", url.host);
        const response = await fetch(webmentions);
        if (response.ok) {
          return response.json();
        }
        return null;
      }
      const allowedTypes = ["mention-of", "in-reply-to"];
      const hasRequiredFields = (entry) => {
        const { author, published, content } = entry;
        return author.name && published && content;
      };
      const feeds = await feed();
      return feeds.children.filter((entry) => url.toString() === entry["wm-target"]).filter((entry) => allowedTypes.includes(entry["wm-property"])).filter(hasRequiredFields);
    }
    connectedCallback() {
      super.connectedCallback();
      this.loadWebmentions = new h3(this, {
        task: _MyMentions.webmentions,
        args: () => [this.url, this.webmentions]
      });
    }
    render() {
      return this.loadWebmentions.render({
        complete: (ms) => ms.length > 0 ? _MyMentions.renderMentions(ms) : x``,
        error: (e4) => x`<p>Error: ${e4}</p>`
      });
    }
    static renderMentions(mentions) {
      return x`
      <my-section subtitle="mentions">
        <div id="mentions">
          ${mentions.map(_MyMentions.renderMention)}
        </div>
      </my-section>
    `;
    }
    static renderMention(mention) {
      return x`
      <my-mention src="${mention.url}" date="${mention.published}">
        <span slot="author">${mention.author.name}</span>
        <img slot="photo" src="${mention.author.photo}" alt="${mention.author.name} photo">
        <p>${mention.content.text}</p>
      </my-mention>
    `;
    }
  };
  customElements.define("my-mentions", MyMentions);

  // _components/my-mention.js
  var MyMention = class extends s3 {
    static styles = i`
    :host {
      --my-mention-photo-size: 40px;
    }

    #mention {
      display: grid;
      gap: 10px;
      grid-template-columns: var(--my-mention-photo-size) 1fr;
    }

    #mention * {
      font-size: 1.2rem;
    }

    #mention > *,
    ::slotted(*) {
      margin: 0;
      padding: 0;
    }

    #mention a {
      text-decoration: inherit;
      color: var(--text-color-link-active);
    }

    #photo {
      grid-row-start: 1;
      grid-row-end: span 2;
    }

    #mention .metadata {
      padding-top: 0.2rem;
    }

    #mention .author {
      font-weight: bold;
    }

    slot[name="photo"]::slotted(img) {
      height: var(--my-mention-photo-size);
      width: var(--my-mention-photo-size);
      border-radius: 50%;
      object-fit: cover;
    }
  `;
    static properties = {
      src: {
        attribute: "src",
        type: String
      },
      date: {
        attribute: "date",
        type: String
      }
    };
    render() {
      return x`
      <div id="mention">
        <div id="photo">
          <a href="${this.src}"><slot name="photo"></slot></a>
        </div>
        <div class="metadata">
          <a href="${this.src}"><slot name="author" class="author"></slot></a>
          |
          ${new Date(this.date).toDateString()}
        </div>
        <p class="content"><slot></slot></p>
      </div>
    `;
    }
  };
  customElements.define("my-mention", MyMention);
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

@lit/task/task.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
