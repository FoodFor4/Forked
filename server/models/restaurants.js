var db = require('../db');


var Restaurants = module.exports

	// selectedRestaurantData = {
	//   yelp_id: dat.id,
	// 	 name: dat.name,
	// 	 rating: dat.rating,
	// 	 phone: dat.phone.slice(0, 3) + '-' + dat.phone.slice(3, 6) + '-' + dat.phone.slice(6, 10),
	// 	 image: dat.image_url,
	// 	 categories: dat.categories.map( (arr) => arr[0] ),
	// 	 address: dat.location.display_address
	// }

Restaurants.findOrCreate = function (selectedRestaurantData) {
	
	var restaurantInfo = Object.assign({}, selectedRestaurantData);

	console.log("created restaurant with data: ", restaurantInfo)

	return db('restaurants').insert(restaurantInfo)
    .then(function (result) {
	console.log('findOrCreate called on ', restaurantInfo, 'returning', result);    	
    return result
  })

}
