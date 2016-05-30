'use strict';

module.exports = function($scope, $http, Services) {

  $scope.welcome = 'Search Module';
  $scope.serverReply;
  $scope.toAdd;

  //value bound to Restaurant/City input on restSearch.html
  $scope.searchInput = {
    term: '',
    location: 'Austin'
  }

  $scope.submitSearch = function() {
    var restRequest = {
      term: $scope.searchInput.term,
      location: $scope.searchInput.location
    }

    Services.yelpSearchResults(restRequest)
      .then(function(resp) {
        $scope.serverReply = resp;
        console.log('Populating page with yelp results: ', resp);
      })
    console.log('Submitted search criterion: ', restRequest);
  }

  $scope.addToRestaurants = function(restaurant) {
    console.log('addToRestaurants fired:', restaurant);
    Services.yelpSearchAdd(restaurant);
  }
}
