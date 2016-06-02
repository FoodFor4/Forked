'use strict';

module.exports = function($scope, $http, $mdDialog, Services) {

  $scope.message = 'Review Modal';

  $scope.ratings = ["Real Bad", "Bad", "Meh", "Good", "Real Good"];
  $scope.prices = ["under $10", "$11-$30", "$31-$60", "above $61"];
  $scope.selectedRating;
  $scope.selectedPrice;
  $scope.textReview = '';
  $scope.usersReview = {
    user_rating: '',
    review: '',
    rest_id: Services.getCurrentRestReview().rest_id,
    user_id: Services.getCurrentRestReview().user_id,
    price: ''
  };

  $scope.submitReview = function() {
    $scope.usersReview.user_rating = $scope.selectedRating;
    $scope.usersReview.review = $scope.textReview;
    $scope.usersReview.price = $scope.selectedPrice;

    console.log('submitReview contents: ', $scope.usersReview);

    Services.submitReview($scope.usersReview);
    $mdDialog.hide();
  };

  $scope.getSelectedRating = function() {
    if ($scope.selectedRating !== undefined) {
      return $scope.selectedRating;
    } else {
      return "Select rating";
    }
  };

  $scope.getSelectedPrice = function() {
    if ($scope.selectedPrice !== undefined) {
      return $scope.selectedPrice;
    } else {
      return "Select price range";
    }
  };

  //not implemented
  $scope.showReview = function() {
    console.log($scope.usersReview);
  }

};
