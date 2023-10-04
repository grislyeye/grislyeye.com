import {
  LitElement,
  html,
  css,
  isServer
} from 'lit';
import './my-section.js';

class MyHeroHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h1 {
      font-size: 5rem;
      text-transform: uppercase;

      padding-bottom: 10px;
      margin: 0;
      margin-left: var(--content-subtitle-max-width);
    }

    .description {
      font-size: 1.6rem;
      margin: 0;
    }
  `;

  static properties = {
    subtitle: { attribute: 'subtitle' }
  };

  render() {
    if (isServer) {
      return html`
        <h1><slot name="title">Hero Header Title</slot></h1>
        <my-section subtitle="${ this.subtitle }">
          <p class="description"><slot name="description">Hero header description</slot></p>
        </my-section>
      `;
    }

    return undefined;
  }
}

customElements.define('my-hero', MyHeroHeader);
