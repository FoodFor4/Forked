var db = require('../db');


var Reviews = module.exports;

// restaurantReviewData = {
// 	user_id: user_id,
// 	rest_id: rest_id,
// 	user_rating: user_rating,
// 	review: review,
// 	price: price
// }

Reviews.addNew = function (restaurantReviewData) {

  var reviewInfo = Object.assign({}, restaurantReviewData);

  console.log("created review with data: ", reviewInfo);

  return db('reviews').insert(reviewInfo)
    .then(function (result) {
      console.log('addNew called on ', restaurantReviewData, 'returning', result);

      return db('buckets').where({
        rest_id: restaurantReviewData.rest_id,
        user_id: restaurantReviewData.user_id
      }).update({
        category: 'beenThere'
      }).then(function (data) {
        return data;
      });
    })
};

Reviews.getReviews = function (rest_id) {
  return db('reviews').where({
      rest_id: rest_id
    })
    .then(function (rows) {
      console.log('getReviews called on ', rest_id, 'returning', rows);
      return rows
    })
};
// This function is broken = will work on this Matt.
Reviews.getUserReview = function (user_id, rest_id) {
  return db('reviews').where({
    user_id:  user_id,
    rest_id:  rest_id
    })
    .then(function (rows) {
      console.log('getUserReview called on ', user_id, rest_id, 'returning', rows);
      return rows;
    })
};
