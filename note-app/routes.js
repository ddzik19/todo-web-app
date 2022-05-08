'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const index = require('./routes/index');
const reg = require('./routes/register');
const about = require('./routes/about');


router.get('/', index.index);
router.get('/register', reg.index);
router.get('/about', about.index);

// posting routes


// export router module
module.exports = router;