import { LitElement, html, css, isServer } from 'lit';

class MyButton extends LitElement {
  static styles = css`
  :host {
    display: inline-block;
  }

  .button {
    height: 38px;
    padding: 0 30px;
    color: white;
    background-color: red;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 38px;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;
  }

  .button a {
    color: inherit;
    text-decoration: inherit;
    cursor: inherit;
  }

  :host([disabled="true"]) .button {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :host([disabled="true"]) .button a {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
  }
  `;

  static properties = {
    src: {
      attribute: 'src',
      type: String
    },
    title: {
      attribute: 'title',
      type: String
    }
  };

  render() {
    if (isServer) {
      return html`
        <div class="button">
          <a href="${ this.src }">
            ${ this.title }
          </a>
        </div>
      `;
    }
  }
}

customElements.define('my-button', MyButton);
