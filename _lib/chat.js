import * as fs from 'fs';
import Papa from 'papaparse';

const playedBy = {
  'Ba\' Raknul': 'Liam',
  'Ba\'Raknul': 'Liam',
  Biron: 'Chris',
  Orin: 'Morgan',
  Quinn: 'Mark',
  'Quinn Wheatsteal': 'Mark',
  Willem: 'Gaston',
  Lia: 'Hope',
  Red: 'Kat'
};

function renderPlayerMessage(message) {
  switch (message.type) {
    case 'does': return `\n<dt>${ message.actor }</dt>\n<dd class="action">${ message.message }</dd>\n`;
    case 'says': return `\n<dt>${ message.actor }</dt>\n<dd>${ message.message }</dd>\n`;
    default: return '';
  }
}

function renderRoll(roll) {
  return `  <p>${ playedBy[roll.actor] } rolled a ${ roll.message }.</p>\n`;
}

function renderMessage(message) {
  switch (message.type) {
    case 'says': return renderPlayerMessage(message);
    case 'does': return renderPlayerMessage(message);
    case 'rolls': return `</dl>\n\n<aside>\n${ renderRoll(message) }</aside>\n\n<dl>`;
    default: return '';
  }
}

function toMarkdown(messages) {
  const preamble = `
    <section class="chat">

    <dl>`;

  const postamble = `
    </dl>

    <p>To be continued...</p>

    </section>`;

  return preamble + messages.map(renderMessage).join('') + postamble;
}

function parseChat(file) {
  const csv = fs.readFileSync(file, { encoding: 'utf8' });
  const messages = Papa.parse(csv, { header: true });
  return toMarkdown(messages.data);
}

export default parseChat;
