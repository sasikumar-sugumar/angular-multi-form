'use strict';

/**
 * @ngdoc overview
 * @name angularMultiFormApp
 * @description
 * # angularMultiFormApp
 *
 * Main module of the application.
 */
angular
  .module('angularMultiFormApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formly','formlyBootstrap','mgo-angular-wizard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
