var mongoose = require('mongoose');
var ApplicantModel = mongoose.model('Applicants');

exports.create = function(req,res, next){
   var reqBody = req.body;
       applicantObject = {
          firstName: reqBody.firstName,
          lastName: reqBody.lastName,
          email: reqBody.email,
          coverLetter: reqBody.coverLetter
       };
   var applicant = new ApplicantModel(applicantObject);
   applicant.save(function(err,doc){
      if (err || !doc) {
         console.log('application error');
      } else {
         res.json(doc);
      }
   });
};
