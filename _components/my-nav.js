import { LitElement, html, css } from 'lit';

class MyNavigationBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--subtitle-font-family);
      font-size: 12pt;
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
      height: 0.8em;
    }

    @media (width < 650px) {
      .socials {
        padding-top: 0.7em;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  `;

  static properties = {
    email: { attribute: 'email' },
    twitter: { attribute: 'twitter' },
    mastodon: { attribute: 'mastodon' },
    bluesky: { attribute: 'bluesky' },
    rss: { attribute: 'rss' },
    location: { attribute: 'location' }
  };

  static renderSocial(type, link, label) {
    return html`
      <div class="social">
        <a href="${ link }" title="RSS">
          <img src="/images/${ type }.svg" class="icon" alt="${ type } label">
          ${ label }
        </a>
      </div>`;
  }

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

        ${ this.email ? MyNavigationBar.renderSocial('email', this.email, 'Mailing Lis') : html`` }

        ${ this.twitter ? MyNavigationBar.renderSocial('twitter', this.twitter, 'Twitter') : html`` }

        ${ this.bluesky ? MyNavigationBar.renderSocial('bluesky', this.bluesky, 'Bluesky') : html`` }

        ${ this.mastodon ? MyNavigationBar.renderSocial('mastodon', this.mastodon, 'Mastodon') : html`` }

        ${ this.rss ? MyNavigationBar.renderSocial('rss', this.rss, 'RSS') : html`` }
      </div>
    `;
  }
}

customElements.define('my-nav', MyNavigationBar);
