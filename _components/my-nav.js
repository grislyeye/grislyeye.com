import { LitElement, html, css } from 'lit';

class MyNavigationBar extends LitElement {
  static styles = css`
    .bar {
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
    logoUrl: { attribute: 'logo' },
  };

  render() {
    return html`
      <div class="bar">
        <a href="/"><img src="${this.logoUrl}" class="icon logo"></img></a>
        <a href="/"><span><slot name="title"></slot></span></a>
      </div>
    `;
  }
}

customElements.define('my-nav', MyNavigationBar);
