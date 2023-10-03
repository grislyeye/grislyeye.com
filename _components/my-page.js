import { LitElement, html, css, isServer } from 'lit';
import './my-section.js';

class MyPage extends LitElement {
  static styles = css`
    :host {
    }

    h1.title {
      font-size: 5rem;
      text-transform: uppercase;
      line-height: 1;
      padding-bottom: 10px;
      margin: 0;
      margin-left: var(--content-subtitle-max-width);
      word-wrap:break-word;
    }
  `;

  static properties = {
    title: { attribute: 'title' },
    subtitle: { attribute: 'subtitle' }
  };

  render() {
    if (isServer) {
      return html`
        <h1 class="title">
          ${ this._renderTitle() }
        </h1>
        <my-section subtitle="${ this.subtitle }">
          <slot></slot>
        </my-section>
      `;
    }
  }

  _renderTitle() {
    const [first, ...tail] = this.title.split(" ");
    if(first && tail) {
      return html`${first} <br> ${ tail.join(" ") }`
    } else return this.title;
  }
}

customElements.define('my-page', MyPage);