var t = [ { message: 'Dolore laborum amet deserunt amet aute enim.' }, { message: 'Quis velit ad in ut eiusmod amet ea enim eiusmod.' }, { message: 'Pariatur ut aute eu eu nisi ea ea.' }, { message: 'Nisi do Lorem anim in sint in ut eiusmod.' }, { message: 'Aliquip anim magna nulla aliquip.' }, { message: 'Lorem ullamco tempor exercitation veniam.' }, { message: 'Veniam aliquip nisi magna incididunt.' } ];
function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(m=> m.message.length <50);
  }
  getShortMessages(t);
  module.exports = getShortMessages