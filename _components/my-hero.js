import { html, css } from 'lit';
import { MyLitElement } from './my-lit-element.js';

class MyHeroHeader extends MyLitElement {
  static styles = css`
    h1 {
      font-size: 5rem;
      text-transform: uppercase;

      padding-bottom: 10px;
      margin: 0;
    }

    .subtitle {
      font-size: 1.6rem;
      margin: 0;
    }
  `;

  render() {
    return html`
      <h1><slot name="title">Hero Header Title</slot></h1>
      <p class="subtitle"><slot name="subtitle">Hero header subtitle</slot></p>
    `;
  }
}

customElements.define('my-hero', MyHeroHeader);
