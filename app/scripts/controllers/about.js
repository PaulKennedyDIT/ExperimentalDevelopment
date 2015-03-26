'use strict';

/**
 * @ngdoc function
 * @name experimentalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the experimentalApp
 */
angular.module('experimentalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
