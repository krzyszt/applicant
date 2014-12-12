angular.module('applicantApp.services',['ngResource'])
   .factory('Applicant',['$resource', function($resource){
         return $resource('/api/applicant/:applicantId', {}, {
            query: { method: 'GET', params: {applicantId: ''}, isArray: true} 
         });
}]);