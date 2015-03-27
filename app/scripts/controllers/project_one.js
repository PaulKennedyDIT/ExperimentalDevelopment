/*jshint bitwise: false*/
'use strict';

/**
 * @ngdoc function
 * @name experimentalApp.controller:ProjectOneCtrl
 * @description
 * # ProjectOneCtrl
 * Controller of the experimentalApp
 */
angular.module('experimentalApp')
  .controller('ProjectOneCtrl', function ($scope) {
  	$scope.age = null;

  	$scope.calculateAge = function calculateAge() { // birthday is a date
  	var age = new Date($scope.age);
    var ageDifMs = Date.now() - age.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
  });

