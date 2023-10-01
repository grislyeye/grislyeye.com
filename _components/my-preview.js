import { html, css, LitElement, isServer } from 'lit';

class MyPreview extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      overflow: hidden;
      width: var(--preview-size);
      height: var(--preview-size);

      background-size: cover;
      background-position: top;
    }

    header {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }

    header h1 {
      font-size: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: calc(var(--preview-size) * 0.6);
    }

    header h1,
    header p {
      margin: 0;
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
    class: { attribute: 'class' },
    backgroundSrc: { attribute: 'background' }
  };

  static Book = "book"
  static Article = "article"

  get _hostStyle() {
    return this.renderRoot.host.style
  }

  get _backgroundImage() {
    if (this.class.includes("light") && this.type != MyPreview.Book) {
      return `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("${ this.backgroundSrc }")`;
    } else {
      return `url("${ this.backgroundSrc }")`;
    }
  }

  get _blendMode() {
    if (this.class.includes("dark")) return "darken, difference";
    else if (this.class.includes("light")) return "lighten, difference";
    else return "darken";
  }

  get _backgroundColour() {
    if (this.class.includes("dark")) return "grey";
    else if (this.class.includes("light")) return "white";
    else return "red";
  }

  static loadedAttributeName = "my-background-loaded";

  _onVisible() {
    const loaded = this.getAttribute(MyPreview.loadedAttributeName);
    if (loaded === null) {
      if (this.type != MyPreview.Book && this.backgroundSrc) {
        this._hostStyle.backgroundImage = this._backgroundImage;
        this._hostStyle.backgroundColor = this._backgroundColour;
        this._hostStyle.backgroundBlendMode = this._blendMode;
      } else if (this.backgroundSrc) {
        this._hostStyle.backgroundImage = this._backgroundImage;
      }

      this.setAttribute(MyPreview.loadedAttributeName, "")
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(() => {
          if (entries[0].intersectionRatio <= 0) return;
          this._onVisible()
      })
    });

    this._observer.observe(this);
  }

  get type() {
    if (this.class.includes("product")) return MyPreview.Book;
    else if (this.class.includes("post")) return MyPreview.Article;
  }

  render() {
    if (isServer) {
      return html`
        <header>
          <h1><slot name="title">Preview Title</slot></h1>
          <p>${ this.type }</p>
        </header>
      `;
    }
  }
}

customElements.define('my-preview', MyPreview);
