angular.module('myApp.services', [])

  .factory('Services', function ($http) {
    // grabs existing user bucket list
    var getUserRestaurantList = function() {
      return $http({
        method: 'GET',
        url: // tbd
      })
    };

    // add additional restaurant to user bucket list
    // input should be an object:
    // {
    //   name: name,
    //   category: category,
    //   address: address,
    //   image: image,
    //   rating: rating,
    //   cost: cost,
    // }
    var addToUserRestaurantList = function( yelpRestaurantID ){

    };

    // remove restaurant from user bucket list
    var removeFromUserRestaurantList = function ( name ) {

    };

    // changes restaurant location after review
    var switchToBeenThereList = function ( /*tbd: restaurantID*/ ) {

    }

    // get results from the search
    var getSearchResults = function (  ) {

    }

    // adds personal review for restaurant on database
    var submitPersonalReview = function( ) {

    }

    return {

    };
  })




// Search Feature response Limit 10:
//   send ==> { name: inputName,
//              location: inputLocation (default ATX)
//            }

//   response = [ 
//     {
//       name: name,
//       rating: rating,
//       image: image_url,
//       phone: phone,
//       address: location
//     },
//     {
//       name: name,
//       rating: rating,
//       image: image_url,
//       phone: phone,
//       address: location
//     },
//     ...
//    ];

//  Populate List querey
//   all meeting criteria

//     // // we'll ping you with a DB querey for current restaurants via username?
//     // // we'll anticipate the ENTIRE list of restaurants... including the fields that users will later input
//     // // example: An array (the list) of restaurants associated with a user.
//     //   [
//     //     {
//     //       name: name,
//     //       rating: rating,
//     //       image: image_url,
//     //       phone: phone,
//     //       address: location,
//     // // // schema adds... (this will not be included when we send you back the restaurant to add...)
//     //       visited: true,
//     //       userReview: 140char (null or filled out...),
//     //       priceRange: (value 1, 2, 3, 4),
//     //       userRating: (null OR 1-5),
//     //     },
//     //     {
//     //       name: name,
//     //       rating: rating,
//     //       image: image_url,
//     //       phone: phone,
//     //       address: location,
//     //       visited: false,
//     //     },
//     //   ]
