import { LitElement, html, css, isServer } from 'lit';

class MySection extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    :host > section {
      display: flex;
      width: 100%;
    }

    .content {
      max-width: var(--content-max-width);
    }

    .subtitle {
      min-width: var(--content-subtitle-max-width);
      max-width: var(--content-subtitle-max-width);
      margin-top: 0.2rem;
      text-align: right;
    }

    ::slotted([slot="subtitle"]) {
      font-size: 1rem;
      font-weight: normal;
      text-transform: lowercase;
      margin-right: 2rem;
    }
  `;

  render() {
    if (isServer) {
      return html`
        <section>
          <div class="subtitle">
            <slot name="subtitle"></slot>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </section>
      `;
    }
  }
}

customElements.define('my-section', MySection);