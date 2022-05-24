// const jsoning = require('jsoning');
// const db = new jsoning('user-store.json');
// const db2 = new jsoning('note-store.json');

// const users = db.get("users");
// const notes = db2.get("notes");

// const userStore = {
//     getAllUsers() {
//         return users;
//     },
//     addUser(user) {
//         db.push("users", user);
//     },
//     getUserById(id) {
//         try {
//             for (var i = 0; i < users.length; i++) {
//                 if (users[i].id == id) {
//                     return users[i];
//                 }
//             }
//         } catch (err) {
//             console.log(err + ": in getUserById at line 15 in  user-store.js")
//         }
//     },
//     getUserByEmail(email) {
//         try {
//             for (var i = 0; i < users.length; i++) {
//                 if (users[i].email == email) {
//                     return users[i];
//                 }
//             }
//         } catch (err) {
//             console.log(err + ": in getUserByEmail at line 22 user-store.js")
//         }
//     },
//     addNote(note) {
//         db2.push("notes", note)
//     },
//     deleteNote(id) {
//         try {
//             for (var i = 0; i < notes.length; i++) {
//                 if (notes[i].nid == id) {
//                     // notes.splice(i, 1);
//                     var n = JSON.stringify(notes[i]);
//                     db2.remove("notes", n);
//                     return;
//                 }
//             }
//         } catch (err) {
//             return console.log(err + ": in deleteNotes function at line 33 user-store.js");
//         }
//     },
//     getUserNotes(id) {
//         try {
//             var unotes = []
//             for (var i = 0; i < notes.length; i++) {
//                 if (notes[i].uid == id) {
//                     unotes.push(notes[i]);
//                 }
//             }
//             return unotes;
//         } catch (err) {
//             console.log(err + ": in getUserNotes at line 45 user-store.js");
//         }
//     }
// }

const fs = require("fs");

const data = require("../user-store.json")

const userStore = {
    getAllUsers() {
        return data.users;
    },
    addUser(user) {
        data.users.push(user);
        this.saveData();
    },
    getUserById(id) {
        try {
            for (var i = 0; i < data.users.length; i++) {
                if (data.users[i].id == id) {
                    return db.users[i];
                }
            }
        } catch (err) {
            console.log(err + ": in getUserById at line 15 in  user-store.js")
        }
    },
    getUserByEmail(email) {
        try {
            for (var i = 0; i < data.users.length; i++) {
                if (data.users[i].email == email) {
                    return data.users[i];
                }
            }
        } catch (err) {
            console.log(err + ": in getUserByEmail at line 22 user-store.js")
        }
    },
    addNote(id, note) {
        for (var i = 0; i < data.users.length; i++) {
            if (data.users[i].id == id) {
                data.users[i].notes.push(note);
                this.saveData();
                return;
            }
        }
    },
    deleteNote(id) {
        try {
            for (var i = 0; i < data.notes.length; i++) {
                if (data.notes[i].nid == id) {
                    data.notes.splice(i, 1);
                    this.saveData();
                    return;
                }
            }
        } catch (err) {
            return console.log(err + ": in deleteNotes function at line 33 user-store.js");
        }
    },
    getUserNotes(id) {
        try {
            for (var i = 0; i < data.users.length; i++) {
                if (data.users[i].id == id) {
                    return data.users[i].notes;
                }
            }
            return unotes;
        } catch (err) {
            console.log(err + ": in getUserNotes at line 45 user-store.js");
        }
    },
    saveData() {
        fs.writeFileSync("user-store.json", JSON.stringify(data), "utf8", (err) => {
            if (err) throw err;
            console.log("data saved!");
            console.log(data);
        });
    }
}


module.exports = userStore;