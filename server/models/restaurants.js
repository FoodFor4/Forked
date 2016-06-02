var db = require('../db');


var Restaurants = module.exports;

//
// Attempts to find selected restaurant in the restaurants db table. 
// Creates an entry if not found
//
Restaurants.findOrCreate = function (selectedRestaurantData, userId) {

  var restaurantInfo = Object.assign({}, selectedRestaurantData);

  console.log("created or finding restaurant with data: ", restaurantInfo, userId);

  return Restaurants.find({
    yelp_id: restaurantInfo.yelp_id
  }).then(function (data) {
    console.log("Found restaurant data: ", data);
    console.log("data.rest_id: ", data.rest_id);

    if (data.rest_id) {
      console.log('Returned restaurant info data', data);
      return db('buckets').returning('bucket_id').insert({
        rest_id: data.rest_id,
        user_id: userId,
        category: 'wishlist'
      }).then(function () {
        return data;
      })
    } else {
      return db('restaurants').returning('rest_id').insert(restaurantInfo)
        .then(function (result) {
          console.log('findOrCreate called on ', restaurantInfo, 'returning', result);
          var bucket = {
            rest_id: result[0],
            user_id: userId,
            category: 'wishlist'
          };
          console.log('Bucket object', bucket);

          db('buckets').insert(bucket).then(function (data) {
            console.log("Bucket insert results", data)
          });
          return restaurantInfo;
        })
    }
  })
};

Restaurants.find = function (restaurantData) {
  var restaurantInfo = Object.assign({}, restaurantData);

  console.log("Finding restaurant with data: ", restaurantInfo);

  return db('restaurants').where({
      yelp_id: restaurantInfo.yelp_id
    })
    .then(function (result) {
      console.log('find called on', restaurantInfo, 'returning', result);
      return result;
    })
};

Restaurants.findAllAttachedToUserId = function (userId) {
  return db('buckets')
    .select('*')
    .leftOuterJoin('restaurants', 'buckets.rest_id', 'restaurants.rest_id')
    .where({
      user_id: userId
    })
    .then(function (data) {
      console.log("FindAllAttachedToUserId data =", data);
      return data;
    });
};
