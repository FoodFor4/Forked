'use strict';

module.exports = function ($scope, $http, Services) {

 $scope.message = 'Review Modal';

 $scope.ratings = ["Real Bad", "Bad", "Meh", "Good", "Real Good"];
 $scope.prices = ["under $10", "$11-$30", "$31-$60", "above $61"];
 $scope.selectedRating;
 $scope.selectedPrice;
 $scope.textReview = '';
 $scope.usersReview = {
   user_rating: '',
   review: '',
   restaurant_id: null,
   price: ''
 };

 $scope.submitReview = function() {
   $scope.usersReview.user_rating = $scope.selectedRating;
   $scope.usersReview.review = $scope.textReview;
   $scope.usersReview.price = $scope.selectedPrice;
   console.log('submitReview contents: ', $scope.usersReview);
   Services.submitReview( $scope.usersReview );
 }

 $scope.getSelectedRating = function() {
   if ($scope.selectedRating !== undefined) {
     return $scope.selectedRating;
   } else {
     return "Select rating";
   }
 }

 $scope.getSelectedPrice = function() {
  if ($scope.selectedPrice !== undefined) {
    return $scope.selectedPrice;
  } else {
    return "Select price range";
  }
 }

 $scope.showReview = function() {
   console.log($scope.usersReview);
 }

};

      // Review Table Schema:
          // table.integer('user_id');
          // table.integer('rest_id');
          // table.foreign('user_id').references('users.user_id');
          // table.foreign('rest_id').references('restaurants.rest_id');
          // table.integer('user_rating');
          // table.string('review', 140);
          // table.string('price');
