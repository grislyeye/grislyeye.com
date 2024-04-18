import { LitElement, html, css } from 'lit';

class MyShares extends LitElement {
  static styles = css`
    :host {
      display: inline;
      cursor: pointer;
    }

    :host([native]) .shares {
      display: none;
    }

    .share-button {
      display: none;
      cursor: pointer;
      text-decoration: underline;
    }

    :host([native]) .share-button {
      display: inline;
    }

    a {
      color: inherit;
      text-decoration: inherit;
      cursor: inherit;
    }

    .share {
      padding-left: 0.1em;
      padding-right: 0.1em;
    }

    img.icon {
      padding-top: 0.2em;
      height: 0.8rem;
      filter: brightness(0) invert(1);
    }
  `;

  static properties = {
    title: { attribute: 'title' },
    href: { attribute: 'href' }
  };

  render() {
    return html`
      <div class="shares">
        <a
          class="share"
          title="Share via Email"
          href="mailto:?subject=${ this.title }&amp;body=${ this.href }"
        >
          <img src="/images/email.svg" class="icon" alt="Email icon">
        </a>

        <a
          class="share"
          title="Share on Twitter"
          href="https://twitter.com/intent/tweet/?url=${ this.href }&text=${ this.title }&via=grislyeye"
          target="_blank"
        >
          <img src="/images/twitter.svg" class="icon" alt="Twitter icon">
        </a>

        <a
          class="share"
          title="Share on Facebook"
          href="https://facebook.com/sharer/sharer.php?u=${ this.href }"
          target="_blank"
        >
          <img src="/images/facebook.svg" class="icon" alt="Facebook icon">
        </a>

        <a
          class="share"
          title="Share on Tumblr"
          href="https://tumblr.com/widgets/share/tool?canonicalUrl=${ this.href }&amp;tags=&amp;caption=${ this.title }"
          target="_blank"
        >
          <img src="/images/tumblr.svg" class="icon" alt="Tumblr icon">
        </a>
      </div>
    `;
  }
}

customElements.define('my-shares', MyShares);
