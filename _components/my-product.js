import { LitElement, html, css } from 'lit';

class MyProduct extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    :slotted(.picture) {
      width: 200px;
      height: auto;
    }

    .call.box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
    }

    ul.notes {
      padding: 0;
      margin: 0;
      max-width: 50%;
    }

    .notes li {
      color: white;
      font-size: 1rem;
      font-style: normal;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .price {
      float: left;
      margin: 0;
      padding: 0;
      font-size: 3rem;
      font-style: normal;
      font-weight: normal;
      color: white;
      line-height: 1;
    }

    .button {
      text-align: center;
      margin-top: 0.6rem;
    }

    @media (max-width: 500px) {
      :host {
        width: 100%;
        float: unset;
        display: block;
        margin-bottom: 2em;
      }
    }
  `;

  static properties = {
    product: { attribute: 'product', type: String },
    title: { attribute: 'title', type: String },
    call: { attribute: 'call', type: String },
    currency: { attribute: 'currency', type: String },
    price: { attribute: 'price', type: String },
    src: { attribute: 'src', type: String },
    notes: { attribute: 'notes', type: Array },
    image: { attribute: 'image', type: String },
    timezones: { attribute: 'timezones', type: Array },
    disabled: { attribute: 'disabled', type: Boolean }
  };

  connectedCallback() {
    super.connectedCallback();

    if (this.timezones) {
      const timezone = Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone;

      const shipping = timezone && this.timezones.includes(timezone);
      const callButton = this.shadowRoot.querySelector('my-button');

      if (!shipping && callButton) {
        callButton.setAttribute('disabled', 'true');
      }
    }
  }

  render() {
    return html`
      <img
        class="product image"
        alt="${ this.product } Cover"
        loading="lazy"
        decoding="async"
        src="${ this.image }"
      >

      <div class="call box">
        <h2 class="price">${ this.currency }${ this.price }</h2>

        ${ this.notes ? this.renderNotes() : html`` }

        <div class="call button">
          <a href="${ this.src }">
            <button src="${ this.src }" disabled="${ this.disabled }">${ this.call }</button>
          </a>
        </div>
      </div>
    `;
  }

  renderNotes() {
    return html`
      <ul class="notes">
        ${ this.notes.map((note) => html`<li>${ note }</li>`) }
      </ul>
    `;
  }
}

customElements.define('my-product', MyProduct);
