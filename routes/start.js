const start = {
    // index method - responsible for creating and rendering the view
    index(request, response) {
        const viewData = {
            title: 'Me | Note App',
        };
        response.render('start', viewData);
    }
};

// export the dashboard module
module.exports = start;