import {
  LitElement,
  html,
  css,
  isServer
} from 'lit';

class MyNavigationBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 30px;
      align-items: center;
      justify-content: space-between;
    }

    a {
      color: white;
      padding: 0;
      margin: 0;
    }

    .main {
      display: flex;
      height: 100%;
      align-items: center;
    }

    .main img.logo {
      height: 30px;
      padding-right: 0.7em;
    }

    .socials {
      display: flex;
      height: 100%;
      align-items: center;
      text-transform: lowercase;
    }

    .socials img.icon {
      height: 0.9rem;
      padding-right: 0.2em;
      padding-left: 1.5em;
      padding-top: 0.4em;
    }
  `;

  static properties = {
    email: { attribute: 'email' },
    twitter: { attribute: 'twitter' },
    mastodon: { attribute: 'mastodon' },
    rss: { attribute: 'rss' }
  };

  render() {
    if (isServer) {
      return html`
        <div class="main">
          <a href="/"><img src="/images/logo.svg" class="logo"></a>
          <span>
            <a href="/"><slot name="name"></slot></a> | <a href="/"><slot name="title"></slot></a>
          </span>
        </div>

        <div class="socials">
          <a href="${ this.email }" title="Mailing List"><img src="/images/email.svg" class="icon"></a>
          <a href="${ this.email }" title="Mailing List">Mailing List</a>

          <a rel="me" href="${ this.twitter }" title="Twitter"><img src="/images/twitter.svg" class="icon"></a>
          <a rel="me" href="${ this.twitter }" title="Twitter">Twitter</a>

          <a rel="me" href="${ this.mastodon }" title="Mastodon"><img src="/images/mastodon.svg" class="icon"></a>
          <a rel="me" href="${ this.mastodon }" title="Mastodon">Mastodon</a>

          <a href="${ this.rss }" title="RSS"><img src="/images/rss.svg" class="icon"></a>
          <a href="${ this.rss }" title="RSS">RSS</a>
        </div>
      `;
    }

    return undefined;
  }
}

customElements.define('my-nav', MyNavigationBar);
