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
    }
  `;

  static properties = {
    title: { attribute: 'title' },
    subtitle: { attribute: 'subtitle' }
  };

  render() {
    if (isServer) {
      return html`
        <h1 class="title">${ this.title }</h1>
        <my-section>
          <span slot="subtitle">${ this.subtitle }</span>
          <slot></slot>
        </my-section>
      `;
    }
  }
}

customElements.define('my-page', MyPage);