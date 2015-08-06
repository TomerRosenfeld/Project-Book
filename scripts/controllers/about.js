'use strict';

/**
 * @ngdoc function
 * @name projectBookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectBookApp
 */
angular.module('projectBookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
