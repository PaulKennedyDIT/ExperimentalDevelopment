'use strict';

/**
 * @ngdoc overview
 * @name experimentalApp
 * @description
 * # experimentalApp
 *
 * Main module of the application.
 */
angular
  .module('experimentalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project_one', {
        templateUrl: 'views/project_one.html',
        controller: 'ProjectOneCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
