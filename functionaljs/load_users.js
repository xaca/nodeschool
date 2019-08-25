function loadUsers(userIds, load, done) {
    var users = []
    var total = 0
    for (var i = 0; i < userIds.length; i++) {
        load(userIds[i],(x)=>{
            users[i]=x; 
            if(++total==userIds.length)
            return done(users)
        });
    }
  }

  module.exports = loadUsers