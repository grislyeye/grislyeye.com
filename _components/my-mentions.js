import { LitElement, html, css } from 'lit';
import { Task } from '@lit/task';

class MyMentions extends LitElement {
  static styles = css`
    my-section {
      padding-top: 5rem;
    }

    #mentions {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  `;

  static properties = {
    url: {
      attribute: 'url',
      type: String
    }
  };

  connectedCallback() {
    super.connectedCallback();

    this.loadWebmentions = new Task(this, {
      task: MyMentions.webmentions,
      args: () => [this.url]
    });
  }

  static async webmentions(urls) {
    async function feed() {
      const webmentionsApi = 'https://webmention.io/api/mentions.jf2';
      const domain = 'grislyeye.com';
      const token = '7OpmAMvzsJc6GdoHmDS50w';
      const url = `${ webmentionsApi }?domain=${ domain }&token=${ token }`;

      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      }

      return null;
    }

    const allowedTypes = ['mention-of', 'in-reply-to'];

    const hasRequiredFields = (entry) => {
      const { author, published, content } = entry;
      return author.name && published && content;
    };

    const feeds = await feed();
    return feeds.children
      .filter((entry) => urls.includes(entry['wm-target']))
      .filter((entry) => allowedTypes.includes(entry['wm-property']))
      .filter(hasRequiredFields);
  }

  render() {
    return this.loadWebmentions.render({
      complete: (mentions) => {
        if (mentions.length > 0) {
          return html`
            <my-section subtitle="mentions">
              <div id="mentions">
                ${ mentions.map(MyMentions.renderMention) }
              </div>
            </my-section>
          `;
        }
        return html``;
      },
      error: (e) => html`<p>Error: ${ e }</p>`
    });
  }

  static renderMention(mention) {
    return html`
      <my-mention src="${ mention.url }" date="${ mention.published }">
        <span slot="author">${ mention.author.name }</span>
        <img slot="photo" src="${ mention.author.photo }" alt="${ mention.author.name } photo">
        <p>${ mention.content.text }</p>
      </my-mention>
    `;
  }
}

customElements.define('my-mentions', MyMentions);
