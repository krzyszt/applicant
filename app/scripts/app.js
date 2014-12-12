'use strict';

angular
  .module('applicantApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/features', { templateUrl: 'views/features.tpl.html'})
      .otherwise({ redirectTo: '/'});
  });
