'use strict';

/**
 * @ngdoc overview
 * @name projectBookApp
 * @description
 * # projectBookApp
 *
 * Main module of the application.
 */
angular
  .module('projectBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
       // controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        //controller: 'AboutCtrl'
      })
      .when('/utils', {
        templateUrl: 'views/utils.html',
      //  controller: 'UtilsCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        //controller: 'UtilsCtrl'
      })
      .when('/student', {
        templateUrl: 'views/student.html',
    //    controller: 'UtilsCtrl'
      })
      .when('/technicals', {
        templateUrl: 'views/technicals.html',
        //    controller: 'UtilsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
