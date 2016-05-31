var db = require('../db');


var Restaurants = module.exports

Restaurants.findOrCreate = function (selectedRestaurantData, userId) {

  var restaurantInfo = Object.assign({}, selectedRestaurantData);

  console.log("created or finding restaurant with data: ", restaurantInfo, userId)

  return Restaurants.find({yelp_id: restaurantInfo.yelp_id}).then(function(data) {
    console.log(data);
    if(data.rest_id != null) {
      console.log('Returned restaurant info data', data);
      return db('buckets').insert({rest_id: data.rest_id, user_id: userId, category: 'wishlist'}).then(function() {
        return data
      })
    } else {
      return  db('restaurants').insert(restaurantInfo)
        .then(function (result) {
          //console.log('findOrCreate called on ', restaurantInfo, 'returning', result);
          console.log(result);
          var bucket = {rest_id: result[0], user_id: userId, category: 'wishlist'}
          console.log('Bucket object', bucket);

          db('buckets').insert(bucket).then(function(data) {
            console.log("Bucket insert results", data)
          })

          return restaurantInfo;
        })
    }
  })
}

Restaurants.find = function(restaurantData) {
  var restaurantInfo = Object.assign({}, restaurantData);

  // console.log("Finding restaurant with data: ", restaurantInfo);

  return db('restaurants').where({yelp_id: restaurantInfo.yelp_id})
  .then(function (result) {
    // console.log('find called on', restaurantInfo, 'returning', result);
    return result;
  })
}

Restaurants.findAllAttachedToUserId = function(userId) {
  return db('buckets')
    .select('*')
    .leftOuterJoin('restaurants', 'buckets.rest_id', 'restaurants.rest_id')
    .where({user_id: userId})
    .then(function (data) {
      //console.log(data);
      return data;
    });
}
