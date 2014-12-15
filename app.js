var express = require('express');
var expressSession = require('express-session');
var db = require('./lib/models/db');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = require('./routes/index');
var apply = require('./routes/apply');

var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser("applicant cookie"));
app.use(expressSession({ 
   secrect: 'mySecretKey',
   resave: true,
   saveUninitialized: true
}));

var passport = require('./lib/passport/init')(app);

app.use(require('less-middleware')(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'app')));

//app.use('/users', users);
app.post('/apply', apply.create );

app.post('/signup', function(req, res, next){
   passport.authenticate('signup', function(err, user, info){
      if (err) {
         return next(err);
      }
      if (!user) {
         console.log('Application error - user not created.');
         return;
      }
      
      return res.json(user);
      
   });
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
