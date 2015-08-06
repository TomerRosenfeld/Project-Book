'use strict';

/**
 * @ngdoc function
 * @name projectBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectBookApp
 */
angular.module('projectBookApp')
  .controller('MainCtrl', function ($scope,$location,$rootScope) {
    $scope.goTo = function(where){
      $scope.$apply($location.path("/"+where));
    }
      document.getElementById("fab").onclick = function(){
        var location = $location.path();
        console.log(location);
        if(location=="/"){$scope.goTo("about") }else if(location=="/about"){$scope.goTo("utils")}else if(location=="/utils"){$scope.goTo("admin")}else if(location=="/admin"){$scope.goTo("student")}else if(location=="/student"){$scope.goTo("technicals")}else if(location=="/technicals"){$scope.goTo("")}
      }
  });
