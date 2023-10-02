import { LitElement, html, css, isServer } from 'lit';

class MySection extends LitElement {
  static styles = css`
    :host {
      display: block;
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
      text-align: right;
      font-size: 1rem;
      font-weight: normal;
      text-transform: lowercase;
      padding-right: 1em;
    }
  `;

  static properties = {
    subtitle: { attribute: 'subtitle' }
  };

  render() {
    if (isServer) {
      return html`
        <section>
          <div class="subtitle">
            ${ this.subtitle }
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