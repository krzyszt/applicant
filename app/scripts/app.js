'use strict';

angular
  .module('applicantApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'applicantApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/features', { templateUrl: 'views/features.tpl.html'})
      .when('/apply/', { templateUrl: 'views/apply.tpl.html', controller: 'ApplyCtrl'})
      .otherwise({ redirectTo: '/'});
  });
