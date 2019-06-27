function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(m=> m.message.length <50);
  }
  
  module.exports = getShortMessages