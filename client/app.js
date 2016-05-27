'use strict';
var angular = require('angular')
              require('angular-route');
              require('angular-animate');
              require('angular-cookies');
              require('angular-sanitize');
              require('angular-resource');
              require('angular-aria');
              require('angular-material');
              require('angular-messages');
              require('angular-resource');

angular.module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/forkedLogin.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'views/forkedSignup.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/search', {
        templateUrl: 'views/restSearch.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/review', {
        templateUrl: 'views/restReview.html',
        controller: 'ReviewCtrl',
        controllerAs: 'review'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//define the application module
var app = require('angular').module('myApp');

/*
when we inject a controller/factory/directive we use the format found below:
    app.factory(), app.directive(), app.controller() etc,.
*/

app.controller('MainCtrl', require('./src/main.js'));
app.controller('LoginCtrl', require('./src/forkedLogin.js'));

// Controllers to add:
app.controller('SearchCtrl', require('./src/restSearch.js'));
app.controller('ListCtrl', require('./src/list.js'));
app.controller('ReviewCtrl', require('./src/restReview.js'));

app.factory('Services', require('./services/services.js'));
