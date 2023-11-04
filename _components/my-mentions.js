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

  static urlConverter = {
    fromAttribute: (value) => new URL(value),
    toAttribute: (value) => value.toString()
  };

  static properties = {
    url: {
      attribute: 'url',
      type: String,
      converter: MyMentions.urlConverter
    },
    webmentions: {
      attribute: 'webmentions',
      type: String,
      converter: MyMentions.urlConverter
    }
  };

  static async webmentions([url, webmentions]) {
    async function feed() {
      webmentions.searchParams.delete('domain');
      webmentions.searchParams.append('domain', url.host);

      const response = await fetch(webmentions);
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
      .filter((entry) => url.toString() === entry['wm-target'])
      .filter((entry) => allowedTypes.includes(entry['wm-property']))
      .filter(hasRequiredFields);
  }

  connectedCallback() {
    super.connectedCallback();

    this.loadWebmentions = new Task(this, {
      task: MyMentions.webmentions,
      args: () => [this.url, this.webmentions]
    });
  }

  render() {
    return this.loadWebmentions.render({
      complete: (ms) => (ms.length > 0 ? MyMentions.renderMentions(ms) : html``),
      error: (e) => html`<p>Error: ${ e }</p>`
    });
  }

  static renderMentions(mentions) {
    return html`
      <my-section subtitle="mentions">
        <div id="mentions">
          ${ mentions.map(MyMentions.renderMention) }
        </div>
      </my-section>
    `;
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
