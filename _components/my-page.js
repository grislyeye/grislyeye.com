import { LitElement, html, css } from 'lit';
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
    name: { attribute: 'name' }
  };

  render() {
    return html`
      <h1 class="title">
        ${ this.renderTitle() }
      </h1>
      <my-section>
        <div slot="subtitle"><slot name="subtitle"></slot></div>
        <slot></slot>
      </my-section>
    `;
  }

  renderTitle() {
    const [first, ...tail] = this.name.split(' ');
    if (first && tail) {
      return html`${ first } <br> ${ tail.join(' ') }`;
    }
    return this.name;
  }
}

customElements.define('my-page', MyPage);
