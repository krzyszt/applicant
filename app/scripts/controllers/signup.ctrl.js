'use strict';

angular.module('applicantApp')
   .controller('SignupCtrl', ['$scope', '$routeParams', 'Signup', function($scope, $routeParams, Signup) {

         $scope.save = function() {

            Signup.save($scope.user, function(ref) {

            });

            $scope.user = {
               firstName: '',
               lastName: '',
               email: '',
               username: '',
               password: ''
            };

         };

      }]);
