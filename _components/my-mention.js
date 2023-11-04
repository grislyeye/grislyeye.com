import { LitElement, html, css } from 'lit';

class MyMention extends LitElement {
  static styles = css`
    :host {
      --my-mention-photo-size: 48px;
    }

    #mention {
      display: grid;
      gap: 10px;
      grid-template-columns: var(--my-mention-photo-size) 1fr;
    }

    #mention * {
      font-size: 1.3rem;
    }

    #mention > *,
    ::slotted(*) {
      margin: 0;
      padding: 0;
    }

    #mention a {
      text-decoration: inherit;
      color: var(--text-color-link-active);
    }

    #photo {
      grid-row-start: 1;
      grid-row-end: span 2;
    }

    #mention .metadata {
      padding-top: 0.2rem;
    }

    #mention .author {
      font-weight: bold;
    }

    slot[name="photo"]::slotted(img) {
      height: var(--my-mention-photo-size);
      width: var(--my-mention-photo-size);
      border-radius: 50%;
      object-fit: cover;
    }
  `;

  static properties = {
    src: {
      attribute: 'src',
      type: String
    },
    date: {
      attribute: 'date',
      type: String
    }
  };

  render() {
    return html`
      <div id="mention">
        <div id="photo">
          <a href="${ this.src }"><slot name="photo"></slot></a>
        </div>
        <div class="metadata">
          <a href="${ this.src }"><slot name="author" class="author"></slot></a>
          |
          ${ new Date(this.date).toDateString() }
        </div>
        <p class="content"><slot></slot></p>
      </div>
    `;
  }
}

customElements.define('my-mention', MyMention);
