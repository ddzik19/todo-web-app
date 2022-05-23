const userStore = require('../models/user-store')
const accounts = require('../routes/register')
const cuid = require("@devdamo/cuid")


const start = {
    index(req, res) {
        // getting current user
        const loggedInUser = accounts.getCurrentUser(req);

        const viewData = {
            title: loggedInUser.username + ' | Note App',
            notes: userStore.getUserNotes(loggedInUser.id)
        };
        res.render('start', viewData);
    },
    addNote(req, res) {
        const loggedInUser = accounts.getCurrentUser(req);

        let date = new Date().toLocaleDateString()
        const newNote = {
            uid: loggedInUser.id,
            nid: cuid(20, 1),
            title: req.body.title,
            creationDate: date
        };
        // // adding new note
        userStore.addNote(newNote);
        // refreshing page
        res.redirect("/start");
    },
    deleteNote(req, res) {
        // getting the id of the note
        const id = req.params.nid;
        // passing the id to the deleteNote function in userStore
        userStore.deleteNote(id)
        // refreshing page
        res.redirect("/start")
    }
};

// export the dashboard module
module.exports = start;