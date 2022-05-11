const {
    request
} = require('express');
const userStore = require('../models/user-store.js');
const store = require('../models/user-store.json');
const users = store.users;

const reg = {
    signup(request, response) {
        const viewData = {
            title: 'Login to the Service',
        };
        response.render('signup', viewData);
    },
    register(req, res) {

        // generating teh id
        var id = generateId();
        // validation, checking if this id already exists
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                id = generateId()
            }
        }

        const newUser = {
            id: id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        userStore.addUser(newUser);
        console.log(newUser);
        res.redirect('/');
    },
    authenticate(req, res) {},
};

function generateId() {
    // generate the size of id
    var max = 30;
    var size = Math.floor(Math.random() * max)
    // if the id size is less than 10 generate id again
    while (size < 10) {
        size = Math.floor(Math.random() * max)
    }
    console.log(size)
    // creating a string for id
    var stringId = ''

    // generate the id
    for (var i = 0; i < size + 1; i++) {
        // generating a single digit number
        var num = Math.floor(Math.random() * 10)
        // adding the generated number to stringId
        stringId += num;
    }

    return stringId;
}

// export the dashboard module
module.exports = reg;