module.exports = function ($scope, $http) {

 $scope.message = 'Review Page';

 $scope.ratings = ["Real Bad", "Bad", "Meh", "Good", "Real Good"];
 $scope.selectedRating;
 $scope.textReview = '';
 $scope.usersReview = {
   rating: '',
   review: ''
 };

 $scope.textLength = 140;

 $scope.submitReview = function() {
   console.log('Text review field: ', $scope.textReview);
   console.log('Selected rating: ', $scope.selectedRating);
   $scope.usersReview.rating = $scope.selectedRating;
   $scope.usersReview.review = $scope.textReview;
 };

 $scope.getSelectedRating = function() {
   if ($scope.selectedRating !== undefined) {
     return "You have selected: "+ $scope.selectedRating;
   } else {
     return "Select rating here";
   }
 };

 $scope.showReview = function() {
   console.log($scope.usersReview);
 }

};
