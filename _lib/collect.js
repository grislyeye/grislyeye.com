import groupAdjacent from "./group-adjacent.js";

const flattenCharacterMessages = (messages) => {
  const baseMessage = messages[0];
  if (messages.length === 1) return baseMessage;

  if (baseMessage.chat === "ic") {
    return {
      actor: baseMessage.actor,
      type: "grouped",
      chat: "ic",
      messages
    };
  }

  return baseMessage;
};

const flattenPlayersMessages = (messages) => {
  const baseMessage = messages[0];
  if (messages.length === 1) return baseMessage;

  if (baseMessage.chat === "ooc") {
    return {
      actor: baseMessage.actor,
      type: "grouped",
      chat: "ooc",
      messages
    };
  }

  return baseMessage;
};

const consecutiveOocMessages = (pre, cur) => {
  return pre.chat === cur.chat && cur.chat === "ooc";
};

const collectOocMessages = (messages) => {
  return groupAdjacent(messages, consecutiveOocMessages).map(
    flattenPlayersMessages
  );
};

const consecutiveSameActors = (pre, cur) => {
  return (
    (pre.actor === cur.actor || cur.actor === "") &&
    pre.chat === cur.chat &&
    cur.chat === "ic"
  );
};

const collectIcMessages = (messages) => {
  return groupAdjacent(messages, consecutiveSameActors).map(
    flattenCharacterMessages
  );
};

const collectMessages = (messages) => {
  return collectOocMessages(collectIcMessages(messages));
};

export default collectMessages;
