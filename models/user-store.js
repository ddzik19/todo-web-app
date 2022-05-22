const jsoning = require('jsoning');
const db = new jsoning('user-store.json');
const db2 = new jsoning('note-store.json');

const users = db.get("users");
const notes = db2.get("notes");

const userStore = {
    getAllUsers() {
        return users;
    },
    addUser(user) {
        db.push("users", user);
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
    addNote(note) {
        db2.push("notes", note)
    },
    deleteNote(id) {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == id) {
                return delete notes[i];
            }
        }
    },
    getUserNotes(uid) {
        var unotes = []
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].uid == uid) {
                unotes.push(notes[i]);
            }
        }
        return unotes;
    }
}

module.exports = userStore;