var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/User');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport){
  
   passport.use('signup', new LocalStrategy(
      function(req, username, password, done){
         
         findOrCreateUser = function(username, password, done){
           UserModel.findOne({ username: username}, function(err, user){
              if (err) {
                 console.log('Error on sign up: ' + err);
                 return done(err);
              }
              
              if (user) {
                 var msg = 'User with username: ' + username + ' already exists.';
                 console.log(msg);
                 return done(null, false, { message: msg });
              } else {
               
                 var newUser = new UserModel();
                 newUser.username = username;
                 newUser.password = createHash(password);
                 newUser.email = req.param('email');
                 newUser.firstName = req.param('firstName');
                 newUser.lastName = req.param('lastName');
                 
                 newUser.save(function(err){
                    if (err) {
                       console.log('Erron in saving user ' + err);
                       return; 
                    }
                    
                    return done(null, newUser);
                 });
                 
              }
           });
         };
         
         process.nextTick(findOrCreateUser);
      }
   ));
   
   var createHash = function(password){
      return bcrypt.hashSync(password);
   }
   
};