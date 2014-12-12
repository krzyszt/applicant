angular.module('applicantApp.services',['ngResource'])
   .factory('Applicant',['$resource', function($resource){
         return $resource('/apply');
}]);