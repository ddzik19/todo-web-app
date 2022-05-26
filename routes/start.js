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
            nid: cuid(20, 1),
            title: req.body.title,
            creationDate: date,
            content: []
        };
        // // adding new note
        userStore.addNote(loggedInUser.id, newNote);
        // refreshing page
        res.redirect("/start");
    },
    deleteNote(req, res) {
        const loggedInUser = accounts.getCurrentUser(req);
        // getting the id of the note
        const id = req.params.nid;

        // passing the id to the deleteNote function in userStore
        userStore.deleteNote(loggedInUser.id, id)
        // refreshing page
        res.redirect("/start")
    },
    binIndex(req, res) {
        const loggedInUser = accounts.getCurrentUser(req);

        const viewData = {
            title: loggedInUser.username + ' | Note App',
            delNotes: userStore.getDelUserNotes(loggedInUser.id)
        };
        res.render('start', viewData);
    }
};

// export the dashboard module
module.exports = start;