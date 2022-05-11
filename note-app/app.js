// const createError = require('http-errors');
const express = require('express');
const {
  engine
} = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use("/public", express.static('public'));
app.engine('.hbs', engine({
  extname: '.hbs',
  layoutsDir: __dirname + '/views/layout',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// app.use('/', indexRouter);
// app.use('/about', aboutRouter);

const routes = require('./routes');
app.use('/', routes);





// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 3000);
//   res.render('error');
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;