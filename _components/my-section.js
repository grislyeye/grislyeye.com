import { LitElement, html, css } from "lit";

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
      color: var(--muted-color);
    }

    .next {
      text-align: right;
      color: var(--muted-color);
    }

    .next ::slotted(a),
    .next ::slotted(a:hover),
    .next ::slotted(a:active),
    .next ::slotted(a:visited) {
      color: var(--muted-color);
    }

    .next ::slotted(a:hover) {
      color: white;
    }

    @media (width < 970px) {
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
      <div class="next">
        <slot name="next"></slot>
      </div>
    `;
  }
}

customElements.define("my-section", MySection);
