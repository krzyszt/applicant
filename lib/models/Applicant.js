var mongoose = require('mongoose');
var ApplicantSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    coverLetter: String
});
var ApplicantModel = module.exports = mongoose.model('Applicants', ApplicantSchema);