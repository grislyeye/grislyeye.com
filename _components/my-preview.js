import { html, css, LitElement } from 'lit';
// import { MyLitElement } from './my-lit-element.js';

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

    header h1,
    header p {
      margin: 0;
      padding: 0;
    }

    header p {
      font-size: 1.5rem;
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
  `;

  static properties = {
    class: { attribute: 'class' },
    backgroundSrc: { attribute: 'background' }
  };

  static Book = "book"
  static Article = "article"

  connectedCallback() {
    super.connectedCallback();
    this.renderRoot.host.style.backgroundImage = `url("${ this.backgroundSrc }")`;
  }

  get type() {
    if (this.class.includes("product")) return MyPreview.Book;
    else if (this.class.includes("post")) return MyPreview.Article;
  }

  render() {
    return html`
      <header>
        <h1><slot name="title">Preview Title</slot></h1>
        <p>${ this.type }</p>
      </header>
    `;
  }
}

customElements.define('my-preview', MyPreview);
