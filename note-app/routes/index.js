var express = require('express');
var router = express.Router();

const index = {
  // index method - responsible for creating and rendering the view
  index(request, response) {
    const viewData = {
      title: 'Home | Note App',
    };
    response.render('index', viewData);
  }
};

// export the dashboard module
module.exports = index;