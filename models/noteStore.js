const store = require('./noteStore.json')
var notes = store.notes;

const noteStore = {
    addNote(note) {
        notes.push(note);
    },
    getNoteByUserId(id) {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id == id) {
                return notes[i];
            }
        }
    }
}

module.exports = noteStore;