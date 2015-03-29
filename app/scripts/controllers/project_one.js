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
  	$scope.age = '';
	$scope.departDate = new Date();
	$scope.errorDifference = null;

  	// Tuples which define the age range for an Infant, Child and Adult
  	$scope.infant = [2,0];
  	$scope.child = [12,2];
  	$scope.adult = [150,12];
  	$scope.childHotel = [18,0];

  	// Function to Calculate the difference in age between the Current Date and the input Date if the date is in the past.
  	$scope.calculateAge = function calculateAge() {
	  	var ageInput = new Date($scope.age);
	  	var departInput = new Date($scope.departDate);
	  	var date;

	  	// Only calculate age difference if the Age Input is less than the Current Date
	  	if(ageInput.getTime() <= departInput.getTime()){
		    var difference = departInput.getTime() - ageInput.getTime();
		    date = new Date(difference);
		    date = Math.abs(date.getUTCFullYear() - 1970);

		    if(difference === 0){
		    	$scope.errorDifference = true;
		    }
		    $scope.errorDifference = false;

		}

		// If NaN set to null
	    if(isNaN(date)){
	    	date = null;
	    }

	    return date;
	};

	// Function which determines if an item is within an Age Range Specified
	// Usage: ageRange(18,2);
	$scope.ageRange = function ageRange(from,to){
		var currentAge = $scope.calculateAge();
		if(currentAge !== null){
			if(currentAge < from && currentAge >= to){
				return(true);
			}
		}
	};

	// Function which determines if the date of birth has a cross over between the Flight Age Ranges and the Hotel Date Ranges.
	$scope.ageCrossOver = function ageCrossOver(flightFrom,flightTo,hotelFrom,hotelTo,limitTo,limitFrom){
		var currentAge = $scope.calculateAge();
		var flightValid = false;
		var hotelValid = false;

		if(currentAge !== null && currentAge >= limitFrom && currentAge < limitTo){
			// Check is the Flight Segment within the specified limit.
			if(currentAge < flightFrom && currentAge >= flightTo){
				flightValid = true;
			}

			// Check if the Hotel Segment is within the specified limit.
			if(currentAge < hotelFrom && currentAge >= hotelTo){
				hotelValid = true;
			}
		}

		// Determine if the Hotel Segment does not match the Flight segment
		if(hotelValid !== flightValid){
			return true;
		}
		else{
			return false;
		}
	};
  });

