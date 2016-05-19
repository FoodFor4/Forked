angular.module('myApp.services', [])

  .factory('List', function ($http) {

    // grabs existing user bucket list
    var getUserRestaurantList = function() {
      return $http({
        method: 'GET',
        url: // tbd
      })
    };

    // add additional restaurant to user bucket list
    // input should be an object:
    // {
    //   name: name,
    //   category: category,
    //   address: address,
    //   image: image,
    //   rating: rating,
    //   cost: cost,
    // }
    var addToUserRestaurantList = function( yelpRestaurantID ){

    };

    // remove restaurant from user bucket list
    var removeFromUserRestaurantList = function ( name ) {

    };

    // changes restaurant location after review
    var switchToBeenThereList = function ( /*tbd: restaurantID*/ ) {

    }

    // get results from the search
    var getSearchResults = function (  ) {

    }

    // adds personal review for restaurant on database
    var submitPersonalReview = function( ) {

    }

    return {

    };

  })