import { LitElement, html, css, isServer } from 'lit';

class MySection extends LitElement {
  static styles = css`
    :host > section {
      display: flex;
      width: 100%;
    }

    .content {
      max-width: var(--content-max-width);
    }

    .subtitle {
      min-width: calc(var(--content-subtitle-max-width) - 20px);
      margin-top: 0.2rem;
      margin-right: 1rem;
      text-align: right;
    }

    .subtitle ::slotted(*) {
      font-size: 1.2rem;
      font-weight: normal;
      text-transform: lowercase;
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