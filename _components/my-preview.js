import { LitElement, html, css } from 'lit';

class MyPreview extends LitElement {
  static styles = css`
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
    class: { attribute: 'class' },
    backgroundSrc: { attribute: 'background' },
    preload: { attribute: 'preload', type: Boolean }
  };

  static Book = 'book';

  static Article = 'article';

  get hostStyle() {
    return this.renderRoot.querySelector('.container').style;
  }

  get backgroundImage() {
    if (this.backgroundSrc) {
      if (this.class.includes('light') && this.type !== MyPreview.Book) {
        return `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${ this.backgroundSrc }')`;
      }

      return `url('${ this.backgroundSrc }')`;
    }
    return '';
  }

  get backgroundBlendMode() {
    if (this.type === MyPreview.Book) return 'none';
    if (this.class.includes('dark')) return 'darken, difference';
    if (this.class.includes('light')) return 'lighten, difference';
    return 'darken';
  }

  get backgroundColour() {
    if (this.type === MyPreview.Book) return 'none';
    if (this.class.includes('dark')) return 'grey';
    if (this.class.includes('light')) return 'white';
    return 'red';
  }

  onVisible() {
    if (!this.hostStyle.backgroundImage) {
      if (this.type !== MyPreview.Book && this.backgroundSrc) {
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
    if (this.class.includes('product')) return MyPreview.Book;
    if (this.class.includes('post')) return MyPreview.Article;
    return undefined;
  }

  render() {
    return html`
      <div class="container" style="${ this.renderBackgroundStyle() }">
        <header>
          <h1><slot name='title'>Preview Title</slot></h1>
          <p>${ this.type }</p>
        </header>
      </div>
    `;
  }

  renderBackgroundStyle() {
    if (this.preload) {
      return `
        background-image: ${ this.backgroundImage };
        background-color: ${ this.backgroundColour };
        background-blend-mode: ${ this.backgroundBlendMode };
      `;
    }
    return '';
  }
}

customElements.define('my-preview', MyPreview);
