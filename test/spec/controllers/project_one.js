'use strict';

describe('Controller: ProjectOneCtrl', function () {

  // load the controller's module
  beforeEach(module('experimentalApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('ProjectOneCtrl', {
      $scope: scope
    });
  }));
});
