const {
    request
} = require('express');
const userStore = require('../models/user-store')
const jsoning = require('jsoning');
const db = new jsoning('user-store.json');
const cuid = require('@devdamo/cuid');

const reg = {
    signup(request, response) {
        const viewData = {
            title: 'Login to the Service',
        };
        response.render('signup', viewData);
    },
    register(req, res) {
        // generating teh id
        var id = cuid(20, 1);
        // since we are using jsoning we cant just get the 
        var users = db.get("users");
        // validation, checking if this id already exists
        for (var i = 0; i < users.length; i++) {
            // if an id already exists we will generate a new id
            // the loop will go on checking all id's in the database
            if (db.get(id) === id) {
                // generate a new id
                id = cuid(20, 1);
            }
        }
        const newUser = {
            id: id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            notes: []
        }
        userStore.addUser(newUser);
        // console.log(newUser);
        res.redirect('/');
    },
    login(request, response) {
        const viewData = {
            title: 'Login | Note App',
        };
        response.render('login', viewData);
    },
    authenticate(req, res) {},
};

module.exports = reg;