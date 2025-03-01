import { LitElement, html, css } from 'lit';
import './my-button.js';

class MyProduct extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-bottom: 1em;
    }

    .call.box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5em;
    }

    .price {
      margin: 0;
      padding: 0;
      font-style: normal;
      font-weight: bold;
      color: white;
      line-height: 1;
    }

    .notes {
      font-style: italic;
    }

    .disabled a {
      pointer-events: none;
      cursor: default;
    }
  `;

  static properties = {
    call: { attribute: 'call', type: String },
    currency: { attribute: 'currency', type: String },
    price: { attribute: 'price', type: String },
    src: { attribute: 'src', type: String },
    notes: { attribute: 'notes', type: Array }
  };

  render() {
    return html`
      <div class="call box">
        <div class="call button">
          <a href="${ this.src }">
            <my-button class="small">
              <button>${ this.call }</button>
            </my-button>
          </a>
        </div>

        <span class="price">${ this.currency }${ this.price }</span>

        <span class="notes">${ this.notes ? this.renderNotes() : html`` }</span>
      </div>
    `;
  }

  renderNotes() {
    return html`(${ this.notes.join(', ') })`;
  }
}

customElements.define('my-product', MyProduct);
