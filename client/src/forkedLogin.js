'use strict';


module.exports = function($scope, $location, $window, Services) {

    $scope.welcomeLogin = 'Login Module';


    $scope.user = {};

    $scope.login = function () {
      Services.logIn($scope.user)
         .then(function (token) {
           $window.localStorage.setItem('forked', token);
           $location.path('/main');
         })
         .catch(function (error) {
           console.error(error);
         });
    };

    $scope.signup = function () {
      Services.signUp($scope.user)
         .then(function (token) {
           $window.localStorage.setItem('forked', token);
           $location.path('/main');
         })
         .catch(function (error) {
           console.error(error);
         });
    };





}













// angular.module('myApp')
//   .controller('LoginCtrl', ['$scope', function($scope) {







//   }]);
