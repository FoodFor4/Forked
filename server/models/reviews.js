var db = require('../db');


var Reviews = module.exports

// restaurantReviewData = {
// 	user_id: user_id,
// 	rest_id: rest_id,
// 	user_rating: user_rating,
// 	review: review,
// 	price: price
// }

Reviews.addNew = function (restaurantReviewData) {
	
	var reviewInfo = Object.assign({}, restaurantReviewData);

	console.log("created review with data: ", reviewInfo)

	return db('reviews').insert(reviewInfo)
    .then(function (result) {
    return result
  })
}


Reviews.getReviews = function (rest_id) {
	return db('reviews').where({ rest_id: rest_id })
    .then(function (rows) {
      return rows
    })
}