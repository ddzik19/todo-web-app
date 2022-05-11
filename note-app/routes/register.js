const {
    request
} = require('express');
const userstore = require('../models/user-store.js');
const uuid = require('uuid');

const reg = {
    signup(request, response) {
        const viewData = {
            title: 'Login to the Service',
        };
        response.render('signup', viewData);
    },
    register(req, res) {
        const newUser = request.body;
        newUser.id = uuid();
        userstore.addUser(newUser);
        res.redirect('/');
    },
    authenticate(req, res) {},
};

// export the dashboard module
module.exports = reg;