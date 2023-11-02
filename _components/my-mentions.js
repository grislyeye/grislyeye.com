import { LitElement, html, css } from 'lit';
import { Task } from '@lit/task';
import * as sanitizeHtml from 'sanitize-html';

class MyMentions extends LitElement {
  static styles = css``;

  static properties = {
    url: {
      attribute: 'url',
      type: String
    }
  };

  async webmentions() {
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

    const sanitize = (entry) => {
      const { content } = entry;
      if (content['content-type'] === 'text/html') {
        content.value = sanitizeHTML(content.value);
      }
      return entry;
    };

    const feeds = await feed();
    return feeds.children
      .filter((entry) => entry['wm-target'] === this.url)
      .filter((entry) => allowedTypes.includes(entry['wm-property']))
      .filter(hasRequiredFields)
      .map(sanitize);
  }

  loadWebmentions = new Task(this, {
    task: async () => await this.webmentions(),
    args: () => []
  });

  render() {
    return html`
      <h3>Mentions</h3>
      <ol id="webmentions">
        ${ this.loadWebmentions.render({
          pending: () => html``
          // complete: (mentions) => mentions.map( (mention) => html`<li class="webmention>${ mention.url }</li>` ),
      // error: (e) => html`<p>Error: ${e}</p>`
        }) }
      </ol>
    `;
  }
}

customElements.define('my-mentions', MyMentions);
