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
        try {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    return users[i];
                }
            }
        } catch (err) {
            console.log(err + ": in getUserById at line 15 in  user-store.js")
        }
    },
    getUserByEmail(email) {
        try {
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == email) {
                    return users[i];
                }
            }
        } catch (err) {
            console.log(err + ": in getUserByEmail at line 22 user-store.js")
        }
    },
    addNote(note) {
        db2.push("notes", note)
    },
    deleteNote(id) {
        try {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].nid == id) {
                    return notes.splice(i, 1);
                }
            }
        } catch (err) {
            return console.log(err + ": in deleteNotes function at line 33 user-store.js")
        }
    },
    getUserNotes(id) {
        try {
            var unotes = []
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].uid == id) {
                    unotes.push(notes[i]);
                }
            }
            return unotes;
        } catch (err) {
            console.log(err + ": in getUserNotes at line 45 user-store.js");
        }
    }
}

module.exports = userStore;