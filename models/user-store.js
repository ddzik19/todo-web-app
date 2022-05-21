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

// // used to write and read file
// const fs = require('fs')
// const data = fs.readFileSync('user-store.json');
// // parsing the json file
// const parsedData = JSON.parse(data);

// console.log(parsedData)

// const userStore = {
//     addUser(user) {
//         fs.writeFileSync('user-store.json', JSON.stringify(user), null, 2), (err) => {
//             if (err) {
//                 console.log("An error occurred ", err)
//                 return;
//             }
//             console.log("Data saved successfully.")
//         };
//     },
//     addNote(id, note) {

//     },
//     getAllUsers() {
//         return users;
//     },
//     getUserByEmail(email) {
//         for (var i = 0; i < parsedData.users.length; i++) {
//             if (parsedData.users[i].email == email) {
//                 return parsedData.users[i];
//             }
//         }
//     }
// }

module.exports = userStore;