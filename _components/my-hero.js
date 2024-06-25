import { LitElement, html, css } from 'lit';
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

  render() {
    return html`
      <h1><slot name="title">Hero Header Title</slot></h1>
      <my-section>
        <p class="description"><slot name="description">Hero header description</slot></p>
      </my-section>
    `;
  }
}

customElements.define('my-hero', MyHeroHeader);
