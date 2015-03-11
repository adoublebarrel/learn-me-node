function loadUsers(userIds, load, done) {
  var users = [],
      numUsers = userIds.length,
      completed = 0;

  function loaded() {
    completed += 1;
    if (completed === numUsers) {
      done(users);
    }
  }

  function storeUser(j) {
    load(userIds[j], function(user) {
      users[j] = user;
      loaded();
    });
  }

  for (var i = 0; i < numUsers; i++) {
    storeUser(i);
  }

}


function superiorLoadUsers(userIds, load, done) {
  var completed = 0;
  var users = [];
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      if (++completed === userIds.length) return done(users);
    });
  });
}

module.exports = loadUsers;
