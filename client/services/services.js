'use strict';

// Services

module.exports = function($http) {

  var logIn = function( userObj ) {
    console.log('logIn firing POST...');
    return $http({
      method: 'POST',
      url: '/auth/login',
      data: userObj
    })
    .then (function(resp){
      console.log('logIn response: ', resp);
    })
  }

    var signUp = function( userObj ) {
    console.log('signUp firing POST...');
    return $http({
      method: 'POST',
      url: '/auth/signup',
      data: userObj
    })
    .then (function(resp){
      console.log('signUp response: ', resp);
    })
  }

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

    var getList = function( query ) {
    return $http({
      method: 'GET',
      url: '/restaurants/all/',
    })
    .then (function( resp ) {
      console.log('User results from database :', resp.data);
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
    submitReview: submitReview,
    getList: getList,
    logIn: logIn,
    signUp: signUp
  }
}

