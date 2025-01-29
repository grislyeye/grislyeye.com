import groupAdjacent from './group-adjacent.js';

const flattenPlayerMessage = (messages) => {
  const baseMessage = messages[0];
  if (messages.length === 1) return baseMessage;

  if (baseMessage.chat === 'ic') {
    const events = messages
      .filter((m) => m.chat === 'ic');

    return {
      actor: baseMessage.actor,
      type: 'grouped',
      chat: 'ic',
      messages: events
    };
  }

  return baseMessage;
};

const consecutiveSameActors = (pre, cur) => {
  return pre.actor === cur.actor || cur.actor === '';
};

const flattenAsides = (messages) => {
  const baseMessage = messages[0];
  if (messages.length === 1) return baseMessage;

  if (baseMessage.chat === 'ooc') {
    const events = messages
      .filter((m) => m.chat === 'ooc');

    return {
      actor: baseMessage.actor,
      type: 'grouped',
      chat: 'ooc',
      messages: events
    };
  }

  return baseMessage;
};

const consecutiveOocMessages = (pre, cur) => {
  return pre.type === cur.actor && cur.actor === 'ooc';
};

const collectOocMessages = (messages) => {
  return groupAdjacent(messages, consecutiveOocMessages).map(flattenAsides);
};

const collectIcMessages = (messages) => {
  return groupAdjacent(messages, consecutiveSameActors).map(flattenPlayerMessage);
};

const collectMessages = (messages) => {
  return collectOocMessages(collectIcMessages(messages));
};

export default collectMessages;
