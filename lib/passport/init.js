var passport = require('passport');
var login = require('./login');
var signup = require('./signup');
var User = require('../models/User');

module.exports = function(app){
  
   passport.serializeUser(function(user, done){
      console.log('serializing user: ');
      console.log(user);
      done(null, user._id);
   });
   
   passport.deserializeUser(function(id, done){
      User.findById(id, function(err, user){
         if (err) {
            return done(err);
         }
         done(null,user);
      });
   });
   
   login(passport);
   signup(passport);
   
   app.use(passport.initialize());
   app.use(passport.session());
   
   return passport;
};