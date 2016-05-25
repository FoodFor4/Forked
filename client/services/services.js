'use strict';

// Services

module.exports = function($http) {

  var yelpSearchResults = function( query ) {
    return $http({
      method: 'GET',
      url: '/yelp-api/?term=' + query.term + '&location=' + query.location,
    })
    .then (function( resp ) {
      console.log('Search results from yelp :', resp.data);
      return resp.data;
    });
  };

  return {
    yelpSearchResults: yelpSearchResults
  }

}

  // .factory('Services', function ($http) {
  //   // grabs existing user bucket list
  //   var yelpSearchResults = function( querey ) {
  //     return $http({
  //       method: 'GET',
  //       url: '/yelp-api/',
  //       data: querey
  //     })
  //     .then (function( resp ) {
  //       return resp.data;
  //     });
  //   };

  //   var getUserRestaurantList = function() {
  //     return $http({
  //       method: 'GET',
  //       url: // tbd
  //     })
  //   };

  //   // add additional restaurant to user bucket list
  //   // input should be an object:
  //   // {
  //   //   name: name,
  //   //   category: category,
  //   //   address: address,
  //   //   image: image,
  //   //   rating: rating,
  //   //   cost: cost,
  //   // }
  //   var addToUserRestaurantList = function( yelpRestaurantID ){

  //   };

  //   // remove restaurant from user bucket list
  //   var removeFromUserRestaurantList = function ( name ) {

  //   };

  //   // changes restaurant location after review
  //   var switchToBeenThereList = function ( /*tbd: restaurantID*/ ) {

  //   }

  //   // get results from the search
  //   var getSearchResults = function (  ) {

  //   }

  //   // adds personal review for restaurant on database
  //   var submitPersonalReview = function( ) {

  //   }

  //   return {
  //     yelpSearchResults: yelpSearchResults
  //   };
  // })
