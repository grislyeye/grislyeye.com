import { LitElement, html, css, isServer } from 'lit';

class MyNavigationBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 30px;
      align-items: center;
    }

    a {
      color: white
    }

    .icon {
      height: 30px;
      padding-right: 0.7em;
    }
  `;

  static properties = {
    logoUri: { attribute: 'logo' }
  };

  render() {
    if (isServer) {
      return html`
        <a href="/"><img src="${this.logoUri}" class="icon logo"></a>
        <span>
          <a href="/"><slot name="name"></slot></a> | <a href="/"><slot name="title"></slot></a>
        </span>
      `;
    }
  }
}

customElements.define('my-nav', MyNavigationBar);
