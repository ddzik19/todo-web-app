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
    deleteNote(uid, nid) {
        try {
            for (var i = 0; i < data.users.length; i++) {
                if (data.users[i].id == uid) {
                    const unotes = this.getUserNotes(uid);
                    for (var x = 0; x < unotes.length; x++) {
                        if (unotes[x].nid == nid) {
                            unotes.splice(x, 1);
                            this.saveData();
                            return;
                        }
                    }
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
        fs.writeFileSync("user-store.json", JSON.stringify(data, null, 2), "utf8", (err) => {
            if (err) console.log(err + ": in saveData at line 74 user-store.js");
            console.log("data saved!");
            console.log(data);
        });
    }
}


module.exports = userStore;