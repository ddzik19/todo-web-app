const store = require('./user-store.json')
var users = store.users;

const userStore = {
    addUser(user) {
        users.push(user);
    },
    getUserById(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return users[i];
            }
        }
    },
    getUserByEmail(email) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                return users[i];
            }
        }
    }
}

module.exports = userStore;