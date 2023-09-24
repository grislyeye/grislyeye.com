import { html, css } from 'lit';
import { MyLitElement } from './my-lit-element.js';

class MyPreview extends MyLitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      overflow: hidden;
      position: relative;
    }

    h1 {
      font-size: 16pt;
      margin: 0;
      padding: 0;
    }

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  `;

  render() {
    return html`
      <div>
        <h1><slot name="title">Preview Title</slot></h1>
        <div class="background image">
          <slot name="background"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('my-preview', MyPreview);
