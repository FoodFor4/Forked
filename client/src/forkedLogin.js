'use strict';


module.exports = function($scope) {

    $scope.welcomeLogin = 'Login Module';

    $scope.loginFacebook = function() {
      console.log("begin Facebook login process");
      //Redirect to /auth/facebook
      console.log(window.location);
      window.location = '/auth/facebook';
    };

}













// angular.module('myApp')
//   .controller('LoginCtrl', ['$scope', function($scope) {







//   }]);
