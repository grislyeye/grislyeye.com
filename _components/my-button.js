import { LitElement, html, css } from 'lit';

class MyButton extends LitElement {
  static styles = css`
    ::slotted(button) {
      font-family: var(--font-family);
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

    .disabled.button ::slotted(button) {
      pointer-events: none;
      background-color: grey;
      color: lightgrey;
    }`;

  static properties = {
    disabled: { attribute: 'disabled', type: Boolean }
  };

  render() {
    return html`
      <div class="button ${ this.disabled ? 'disabled' : '' }">
        <slot></slot>
      </div>`;
  }
}

customElements.define('my-button', MyButton);
