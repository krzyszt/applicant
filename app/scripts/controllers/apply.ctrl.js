'use strict';

angular.module('applicantApp')
   .controller('ApplyCtrl', ['$scope', '$routeParams', 'Applicant', function($scope, $routeParams, Applicant) {
         $scope.applyFor = "Angular Developer";

         $scope.save = function() {

            Applicant.save($scope.applicant, function(ref) {

            });

            $scope.applicant = {
               firstName: '',
               lastName: '',
               email: '',
               coverLetter: ''
            };

         };

      }]);
