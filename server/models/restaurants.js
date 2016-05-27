var db = require('../db');


var Restaurants = module.exports

  // selectedRestaurantData = {
  //   yelp_id: dat.id,
  //    name: dat.name,
  //    rating: dat.rating,
  //    phone: dat.phone.slice(0, 3) + '-' + dat.phone.slice(3, 6) + '-' + dat.phone.slice(6, 10),
  //    image: dat.image_url,
  //    categories: dat.categories.map( (arr) => arr[0] ),
  //    address: dat.location.display_address
  // }

Restaurants.findOrCreate = function (selectedRestaurantData, userId) {
  
  var restaurantInfo = Object.assign({}, selectedRestaurantData);

  console.log("created or finding restaurant with data: ", restaurantInfo)

  Restaurants.find(restaurantInfo).then(function(data) {
    if(data) {
      return db('buckets').insert({rest_id: data.rest_id, user_id: userId, category: 'wishlist'}).then(function() {
        return data
      })
    } else {
      return  db('restaurants').insert(restaurantInfo)
        .then(function (result) {
          console.log('findOrCreate called on ', restaurantInfo, 'returning', result);

          return db('buckets').insert({rest_id: data[0], user_id: userId, category: 'wishlist'}).then(function() {
            return result
          })
        })
    }
  })

  return db('restaurants').insert(restaurantInfo)
    .then(function (result) {
  console.log('findOrCreate called on ', restaurantInfo, 'returning', result);      
    return result;
  })

}

Restaurants.find = function(restaurantData) {
  var restaurantInfo = Object.assign({}, restaurantData);

  console.log("Finding restaurant with data: ", restaurantInfo);

  return db('restaurants').where(restaurantInfo)
  .then(function (result) {
    console.log('find called on', restaurantInfo, 'returning', result);
    return result;
  })
}

Restaurants.findAllAttachedToUserId = function(userId) {
  return db('buckets')
    .select('*')
    .leftOuterJoin('restaurants', 'buckets.rest_id', 'restaurants.rest_id')
    .where({user_id: userId})
    .then(function (data) {
      return data;
    });
}