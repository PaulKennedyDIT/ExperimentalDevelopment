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

  	// Function to Calculate a persons age based on the current date.
  	$scope.calculateAge = function calculateAge() { 
	  	var age = new Date($scope.age);
	    age = Date.now() - age.getTime();
	    age = new Date(age);
	    return Math.abs(age.getUTCFullYear() - 1970);
	};
  });

