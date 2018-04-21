var createError = require('http-errors');
var express = require('express');
var _ = require('underscore');// directory
var path = require('path'); //join paths
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//allow CORS to use for firefox
var cors = require('cors');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//enable cors so the app can work in chrome
app.use(cors({origin: '*'}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../static"));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
