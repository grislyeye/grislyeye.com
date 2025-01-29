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
  const result = pre.actor === cur.actor || cur.actor === '';
  console.log('compare - start');
  console.log(pre);
  console.log(cur);
  console.log(result);
  console.log('compare - end');
  return result;
};

const collectMessages = (messages) => {
  return groupAdjacent(messages, consecutiveSameActors).map(flattenPlayerMessage);
};

export default collectMessages;
