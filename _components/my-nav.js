import { LitElement, html, css } from 'lit';

class MyNavigationBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--subtitle-font-family);
    }

    @media (width < 650px) {
      :host {
        align-items: flex-start;
      }
    }

    a {
      color: white;
      padding: 0;
      margin: 0;
    }

    .main {
      display: flex;
      align-items: center;
      min-width: max-content;
      gap: 0.5em;
    }

    .main img.logo {
      height: 30px;
    }

    .socials {
      display: flex;
      height: 100%;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      text-transform: lowercase;
      gap: 0.5em 1.5em;
    }

    .social a {
      display: flex;
      align-items: center;
      gap: 0.2em;
    }

    .social img.icon {
      height: 1em;
    }
  `;

  static properties = {
    email: { attribute: 'email' },
    twitter: { attribute: 'twitter' },
    mastodon: { attribute: 'mastodon' },
    rss: { attribute: 'rss' },
    location: { attribute: 'location' }
  };

  render() {
    return html`
      <div class="main">
        <a href="/"><img src="/images/logo.svg" class="logo" alt="Grisly Eye Games logo"></a>
        <span>
          <a href="/"><slot name="name"></slot></a> | <a href="/"><slot name="title"></slot></a>
        </span>
      </div>

      <div class="socials">
        <div class="social">
            <img src="/images/location.svg" class="icon" alt="Location icon"> <span id="location">${ this.location }</span>
        </div>

        <div class="social">
          <a href="${ this.email }" title="Mailing List">
            <img src="/images/email.svg" class="icon" alt="Email icon">
            Mailing List
          </a>
        </div>

        <div class="social">
          <a rel="me" href="${ this.twitter }" title="Twitter">
            <img src="/images/twitter.svg" class="icon" alt="Twitter icon">
            Twitter
          </a>
        </div>

        <div class="social">
          <a rel="me" href="${ this.mastodon }" title="Mastodon">
            <img src="/images/mastodon.svg" class="icon" alt="Mastodon icon">
            Mastodon
          </a>
        </div>

        <div class="social">
          <a href="${ this.rss }" title="RSS">
            <img src="/images/rss.svg" class="icon" alt="RSS icon">
            RSS
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('my-nav', MyNavigationBar);
