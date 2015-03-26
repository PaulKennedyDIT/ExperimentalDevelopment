'use strict';

/**
 * @ngdoc function
 * @name experimentalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the experimentalApp
 */
angular.module('experimentalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
