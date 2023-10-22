import {
  LitElement,
  html,
  css,
  isServer
} from 'lit';

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
      font-weight: bold;
      text-transform: lowercase;
    }

    @media(max-width: 870px) {
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
        /* display: inline;
        min-width: unset;
        max-width: unset; */
      }
    }

    ::slotted(p) {
      margin-top: 0;
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

    return undefined;
  }
}

customElements.define('my-section', MySection);
