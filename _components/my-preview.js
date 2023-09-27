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

    header h1 {
      margin: 0;
      padding: 0;
    }

    header p {
      text-transform: capitalize;
    }

    :host(.products[background]) header h1 {
      display: none;
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
