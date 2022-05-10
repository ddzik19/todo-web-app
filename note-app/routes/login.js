const login = {
    // index method - responsible for creating and rendering the view
    index(request, response) {
        const viewData = {
            title: 'Login | Note App',
        };
        response.render('login', viewData);
    }
};

// export the dashboard module
module.exports = about;