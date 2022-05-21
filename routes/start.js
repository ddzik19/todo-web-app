const userStore = require('../models/user-store')

const accounts = require('../routes/register')

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
        const userId = req.params.id;

        let date = new Date().toLocaleDateString()
        const newNote = {
            title: req.body.title,
            creationDate: date
        };
        // // adding new note
        userStore.addNote(userId, newNote);

        console.log(userId);

        // refreshing page
        res.redirect("/start");
    },
};

// export the dashboard module
module.exports = start;