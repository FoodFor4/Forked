var db = require('../db');


var Buckets = module.exports

Buckets.addToWishBucket

Buckets.switchToBeenBucket = function (rest_id) {
	return db('buckets').where({ rest_id: rest_id })
		.update({ category: 'been' })
		.then(function (rows) {
			console.log('switchToBeenBucket called on ', rest_id, 'returning', rows);
			return rows[0]
		})
}

Buckets.getBucketByUserId = function (user_id) {
	return db('buckets').where({ user_id: user_id })
    .then(function (rows) {
    	console.log('getBucketByUserId called on ', user_id, 'returning', rows);
      return rows
    })
}