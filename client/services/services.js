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
  }

  var yelpSearchAdd = function( restaurantObj ) {
    console.log('yelpSearchAdd firing...');
    return $http({
      method: 'POST',
      url: '/restaurants/',
      data: restaurantObj
    })
    .then (function(resp){
      console.log('yelp serach add response: ', resp);
    })
  }

  var submitReview = function ( userReview ) {
    console.log('addReview firing...');
    return $http({
      method: 'POST',
      url: '/reviews/',
      data: userReview
    })
    .then (function(resp){
      console.log('addreview response: ', resp);
    })
    .catch(function(err) {
      console.log('submitReview error: ', err);
    })
  }

  return {
    yelpSearchResults: yelpSearchResults,
    yelpSearchAdd: yelpSearchAdd,
    submitReview: submitReview
  }
}

