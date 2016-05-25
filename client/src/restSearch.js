'use strict';

module.exports = function($scope, $http, Services) {

  $scope.welcome = 'Search Module';

  $scope.searchInput = {
    term: '',
    location: 'Austin'
  }

  // $scope.serverReply = [ $scope.Franklin, $scope.Perrys, $scope.Branklin ];

  $scope.alertChange = function(){
    console.log($scope.searchInput.restName);
  }

  $scope.submitSearch = function(){
    var restRequest = {
      // search name entered...
      term: $scope.searchInput.term,
      // default is Austin, but can change...
      location: $scope.searchInput.location
    }
    console.log(Services.yelpSearchResults(restRequest));
    console.log('Submitted search criterion: ', restRequest);
  }

  // $scope.displayResponse = function( obj ){
  //   console.log('object from resposne :', obj);
  //   obj.map(function(item){
  //   })
  // }


$scope.serverReply = [$scope.Franklin,$scope.Perrys,$scope.Uchi,$scope.Tacodeli,$scope.SalvationPizza,$scope.GussWorldFamousFriedChicken,$scope.KerbeyLaneCafe,$scope.MattsFamousElRancho];

$scope.Franklin = {
   name: 'Franklin Barbequeue',
   rating: 4.5,
   image: 'http://s3-media1.fl.yelpcdn.com/bphoto/hgki6r-7BTjxdeR7GshAIw/ms.jpg',
   phone: '5124746300',
   address: ["900 E 11th St",
           "East Austin",
           "Austin, TX 78702"],
   categories: [['Barbecue', 'bbq']]
 };


$scope.Perrys = {
   name: "Perry's Steakhouse & Grille",
   rating: 4.0,
   image: 'http://s3-media3.fl.yelpcdn.com/bphoto/-br-DGSTV4VcLroYw6kg1Q/ms.jpg',
   phone: '5124746300',
   address: ["114 W 7th St",
                    "Ste 110",
                    "Downtown",
                    "Austin, TX 78701"],
   categories: [['Steakhouses', 'Seafood']]
 };


$scope.Uchi = {
   name: "Uchi",
   rating: 4.5,
   image: 'https://s3-media2.fl.yelpcdn.com/bphoto/yYzYBnO0bNjPx_9Az24lYQ/ms.jpg',
   phone: '5129164808',
   address: ["801 S Lamar Blvd",
                    "South Lamar District",
                    "Austin, TX 78704"],
   categories: [['Sushi Bars', 'Japanese']]
 };

$scope.Tacodeli = {
   name: "Tacodeli",
   rating: 4.5,
   image: 'http://s3-media3.fl.yelpcdn.com/bphoto/kPqO6RbiOlk6q5XNgU8IBA/ms.jpg',
   phone: '5129164808',
   address: ["1500 Spyglass Dr",
                    "Ste B",
                    "Barton Hills",
                    "Austin, TX 78746"],
   categories: [['Mexican', 'Vegetarian']]
 };

$scope.SalvationPizza = {
   name: "Salvation Pizza",
   rating: 3.5,
   image: 'http://s3-media4.fl.yelpcdn.com/bphoto/QC9Jta0rsQ66XTdkIANIvg/ms.jpg',
   phone: '5125350076',
   address: ["624 W 34th St",
                    "University of Texas",
                    "Austin, TX 78705"],
   categories: [['Pizza']]
 };

$scope.GussWorldFamousFriedChicken = {
   name: "Gus's World Famous Fried Chicken",
   rating: 4.0,
   image: 'http://s3-media4.fl.yelpcdn.com/bphoto/veNBHKwcBbjuUzjp4iLubw/ms.jpg',
   phone: '5124744877',
   address: ["117 San Jacinto",
                    "Downtown",
                    "Austin, TX 78701"],
   categories: [['Southern']]
 };

$scope.KerbeyLaneCafe = {
   name: "Kerbey Lane Cafe",
   rating: 4.0,
   image: 'http://s3-media1.fl.yelpcdn.com/bphoto/SsogqJ4lb6cu1I_vNT_VFQ/ms.jpg',
   phone: '5124511436',
   address: ["3704 Kerbey Ln",
                    "Austin, TX 78731"
            ],
   categories: [['Breakfast & Brunch']]
 };

 $scope.MattsFamousElRancho = {
   name: "Matt's Famous El Rancho",
   rating: 3.5,
   image: 'https://s3-media2.fl.yelpcdn.com/bphoto/bkQAeaCQUmWUYaVCgIkt7Q/ms.jpg',
   phone: '5124629333',
   address: ["2613 S Lamar Blvd",
                    "South Lamar District",
                    "Austin, TX 78704"
            ],
   categories: [['Mexican']]
 };


$scope.MattsFamousElRancho = {
   name: "Matt's Famous El Rancho",
   rating: 3.5,
   image: 'https://s3-media2.fl.yelpcdn.com/bphoto/bkQAeaCQUmWUYaVCgIkt7Q/ms.jpg',
   phone: '5124629333',
   address: ["2613 S Lamar Blvd",
                    "South Lamar District",
                    "Austin, TX 78704"
            ],
   categories: [['Mexican']]
 };
}
