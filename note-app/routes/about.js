var express = require('express');
var router = express.Router();

// router.get('/', function (req, res, next) {
//     res.render('about', {
//         title: 'About | Note App'
//     });
// });

// module.exports = router;

const about = {
    // index method - responsible for creating and rendering the view
    index(request, response) {
        const viewData = {
            title: 'About | Note App',
        };
        response.render('about', viewData);
    }
};

// export the dashboard module
module.exports = about;