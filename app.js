//==================REQUIRE MODULES====================================
var express = require('express'),
    expressSession = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

//====================LOCAL MODULES=============================
var db = require('./lib/models/db');

//=====================CONFIGURATION============================
// var config = require('./config/config'),
//     auth = require('./config/authenticate.js');

//====================EXPRESS APP===============================
var app = express();
//=======================MIDDLEWARE================================
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

//===========================VIEWS,LAYOUTS,ENGINE==================
app.use(require('less-middleware')(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'app')));

//===================PASSPORT=========================
// var passport = require('./lib/passport/init')(app);




//===================ROUTES======================================
//var routes = require('./routes/index');
var apply = require('./routes/apply');



//app.use('/users', users);
app.post('/apply', apply.create );

// app.post('/signup', function(req, res, next){
//    console.log(req.body);
//    passport.authenticate('signup', function(err, user, info){
//       if (err) {
//          return next(err);
//       }
//       if (!user) {
//          console.log('Application error - user not created.');
//          return;
//       }
//       return res.json(user);
//    });
// });


//==================ERROR HANDLERS===============================

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

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

//=================MODULE EXPORTS=================================
module.exports = app;