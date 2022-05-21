'use strict';

// import express and initialize router
const express = require('express');
const router = express.Router();

// import controllers
const index = require('./routes/index');
const reg = require('./routes/register');
const start = require('./routes/start');


// getting routes
router.get('/', index.index);
router.get('/signup', reg.signup);
router.get('/login', reg.login);
router.get('/start', start.index);


// posting routes
router.post('/register', reg.register);
router.post('/authenticate', reg.authenticate);
router.post('/start/addNote', start.addNote);

// export router module
module.exports = router;