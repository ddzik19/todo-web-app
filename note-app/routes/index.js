var express = require('express');
var router = express.Router();

// router.get('/', (req, res, next) => {
//   const data = {
//     title: 'Home | Note App'
//   }

//   res.render('index', data);
// });

// module.exports = router;

// create dashboard object
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