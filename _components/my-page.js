import {
  LitElement,
  html,
  css,
  isServer
} from 'lit';
import './my-section.js';

class MyPage extends LitElement {
  static styles = css`
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
    title: { attribute: 'title' },
    subtitle: { attribute: 'subtitle' }
  };

  render() {
    if (isServer) {
      return html`
        <h1 class="title">
          ${ this.renderTitle() }
        </h1>
        <my-section subtitle="${ this.subtitle }">
          <slot></slot>
        </my-section>
      `;
    }

    return undefined;
  }

  renderTitle() {
    const [first, ...tail] = this.title.split(' ');
    if (first && tail) {
      return html`${ first } <br> ${ tail.join(' ') }`;
    }
    return this.title;
  }
}

customElements.define('my-page', MyPage);
