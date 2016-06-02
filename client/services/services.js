'use strict';
// Services

module.exports = function($http) {

  var logIn = function(userObj) {
    console.log('logIn firing POST...');
    return $http({
        method: 'POST',
        url: '/auth/login',
        data: userObj
      })
      .then(function(resp) {
        console.log('logIn response: ', resp);
      })
  }

  var signUp = function(userObj) {
    console.log('signUp firing POST...');
    return $http({
        method: 'POST',
        url: '/auth/signup',
        data: userObj
      })
      .then(function(resp) {
        console.log('signUp response: ', resp);
      })
      .then(function() {
        console.log('signUp object... :', data );
      })
  }

  var yelpSearchResults = function(query) {
    console.log('yelpSearchResults firing w/: ', query);
    return $http({
        method: 'GET',
        url: '/yelp-api/?term=' + query.term + '&location=' + query.location,
      })
      .then(function(resp) {
        console.log('Search results from yelp :', resp.data);
        return resp.data;
      });
  }

  var getList = function() {
    return $http({
        method: 'GET',
        url: '/restaurants/all/'
      })
      .then(function(resp) {
        console.log('User results from database :', resp);
        return resp.data;
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  var yelpSearchAdd = function(restaurantObj) {
    console.log('yelpSearchAdd firing...');
    return $http({
        method: 'POST',
        url: '/restaurants/',
        data: restaurantObj
      })
      .then(function(resp) {
        console.log('yelp serach add response: ', resp);
      })
  }

  var yelpBeenThere = function(restaurantObj) {
    console.log('yelpBeenThere firing...');
    return $http({
        method: 'POST',
        url: '/restaurants/been/',
        data: restaurantObj
      })
      .then(function(resp) {
        console.log('switch to been there response: ', resp);
      })
  }

  var yelpWishList = function(restaurantObj) {
    console.log('yelpWishList firing...');
    return $http({
        method: 'POST',
        url: '/restaurants/wishlist/',
        data: restaurantObj
      })
      .then(function(resp) {
        console.log('switch to wishlist response: ', resp);
      })
  }

  var submitReview = function(userReview) {
    console.log('addReview firing...', userReview);
    return $http({
        method: 'POST',
        url: '/reviews/',
        data: userReview
      })
      .then(function(resp) {
        console.log('addreview response: ', resp);
      })
      .catch(function(err) {
        console.log('submitReview error: ', err);
      })
  }

  var seeReview = function( userReview ) {
    console.log('seeReview is pulling the users review...', userReview);
    return $http({
      method: 'GET',
      url:'/reviews/',
    })
    .then(function( resp ) {
      console.log('Review server response: ', resp);
    })
    .catch(function( err ) {
      console.log('seeReview error: ', err);
    })
  }

  return {
    yelpSearchResults: yelpSearchResults,
    yelpSearchAdd: yelpSearchAdd,
    yelpBeenThere: yelpBeenThere,
    yelpWishList: yelpWishList,
    submitReview: submitReview,
    getList: getList,
    logIn: logIn,
    signUp: signUp,
    seeReview: seeReview
  }
}
