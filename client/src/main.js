'use strict';

angular.module('tabsDemoDynamicHeight', ['ngMaterial']);

module.exports = function($scope, $http /*SeverService*/) {


  $scope.welcomeMain = 'Main Module';

 $scope.searchInput = {
    term: '',
    location: 'Austin'
  }

  // $scope.serverReply = [ $scope.Franklin, $scope.Perrys, $scope.Branklin ];

  $scope.alertChange = function(){
    console.log($scope.searchInput.restName);
  }

  $scope.submitSearch = function(){
    var restRequest = {
      // search name entered...
      name: $scope.searchInput.term,
      // default is Austin, but can change...
      city: $scope.searchInput.location
    }
    console.log('Submitted search criterion: ', restRequest);
    //wishful programming...
   // return userSearch( restRequest )();
  }



$scope.mainServerReply = [$scope.Franklin,$scope.Perrys,$scope.Uchi,$scope.Tacodeli,$scope.SalvationPizza,$scope.GussWorldFamousFriedChicken,$scope.KerbeyLaneCafe,$scope.MattsFamousElRancho];


