// const store = require('../user-store.json')
// var users = store.users;

const jsoning = require('jsoning');
const db = new jsoning('user-store.json');

const users = db.get("users");

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
    },
    addNote(id, note) {
        const user = this.getUserNotes(id);
        user.notes.push(note);
        console.log(note)
    },
    getUserNotes(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return users[i].notes;
            }
        }
    }
}

module.exports = userStore;