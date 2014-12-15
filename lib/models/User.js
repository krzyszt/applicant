var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String
});
var UserModel = module.exports = mongoose.model('Users', UserSchema);


