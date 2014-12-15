var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/User');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

   passport.use('login', new LocalStrategy(
      function(username, password, done) {
         UserModel.findOne({'username': username}, function(err, user) {
            if (err) {
               return done(err);
            }

            if (!user) {
               console.log('User with username ' + username + ' not found');
               return done(null, false, {
                  message: 'User not found.'
               });
            }

            if (!isValidPassword(user, password)) {
               console.log('Password not valid');
               return done(null, false, {
                  message: 'Invalid Password'
               });
            }
            return done(null, user);
         });
      }
   ));

   var isValidPassword = function(user,password){
      return bcrypt.compareSync(password, user.password);
   };
};