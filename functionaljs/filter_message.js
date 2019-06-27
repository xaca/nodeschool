function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(m=> m.message.length <50).map(x=>x.message);
  }
  module.exports = getShortMessages