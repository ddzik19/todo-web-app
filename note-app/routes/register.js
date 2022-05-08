const reg = {
    // index method - responsible for creating and rendering the view
    index(request, response) {
        const viewData = {
            title: 'Register | Note App',
        };
        response.render('register', viewData);
    }
};

// export the dashboard module
module.exports = reg;