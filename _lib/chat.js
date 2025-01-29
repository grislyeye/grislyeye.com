import * as fs from 'fs';
import Papa from 'papaparse';
import collectMessages from './collect.js';

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

function renderNestedMessage(message) {
  switch (message.type) {
    case 'does': return `\n<p class="action">${ message.message }</p>\n`;
    case 'says': return `\n<p>${ message.message }</p>\n`;
    default: return '';
  }
}

function renderAside(message) {
  return `\n<p>${ message.actor } says "${ message.message }"</p>\n`;
}

function renderGroupMessages(message) {
  switch (message.chat) {
    case 'ic': return `\n<dt>${ message.actor }</dt>\n<dd>${ message.messages.map(renderNestedMessage).join('\n') }</dd>\n`;
    case 'ooc': return `</dl>\n\n<aside>\n${ message.messages.map(renderAside).join('\n') }</aside>\n\n<dl>`;
    default: return '';
  }
}

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
    case 'grouped': return renderGroupMessages(message);
    default: return '';
  }
}

function toHtml(messages) {
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
  const collected = collectMessages(messages.data);
  return toHtml(collected);
}

export default parseChat;
