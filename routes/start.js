const noteStore = require('../models/noteStore');

const start = {
    // index method - responsible for creating and rendering the view
    index(request, response) {
        const viewData = {
            title: 'Me | Note App',
        };
        response.render('start', viewData);
    },
    addNote(req, res) {
        let date = new Date().toLocaleDateString()
        const newNote = {
            title: req.body.title,
            creationDate: date
        }
    }
};

// export the dashboard module
module.exports = start;