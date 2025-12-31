import { LitElement, html, css } from 'lit';

class MySection extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-left: calc(var(--content-subtitle-max-width) * -1);
    }

    :host * {
      box-sizing: border-box;
    }

    :host > section {
      display: flex;
      width: 100%;
    }

    .content {
      max-width: var(--content-max-width);
      width: 100%;
    }

    .subtitle {
      min-width: var(--content-subtitle-max-width);
      max-width: var(--content-subtitle-max-width);
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      padding-right: 1em;
      text-align: right;

      font-family: var(--subtitle-font-family);
      font-size: 1rem;
      text-transform: lowercase;
    }

    @media(width < 970px) {
      :host {
        margin-left: 0;
      }

      :host > section {
        display: block;
      }

      .subtitle {
        min-width: unset;
        max-width: unset;
        text-align: left;
      }
    }

    ::slotted(*) {
      margin-top: 0;
    }
  `;

  render() {
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

customElements.define('my-section', MySection);
