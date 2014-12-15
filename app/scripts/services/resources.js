angular.module('applicantApp.services',['ngResource'])
   .factory('Applicant',['$resource', function($resource){
         return $resource('/apply');
}]).factory('Signup',['$resource', function($resource){
         return $resource('/signup');
}]);