'use strict';

module.exports = function($scope, $http /*SeverService*/) {

  //hardcode Franklin example
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

  $scope.Branklin = {
    name: 'Branklin Barbequeue',
    rating: 4.5,
    image: 'http://s3-media1.fl.yelpcdn.com/bphoto/hgki6r-7BTjxdeR7GshAIw/ms.jpg',
    phone: '5124746300',
    address: ["900 E 11th St",
            "East Austin",
            "Austin, TX 78702"],
    categories: [['Barbecue', 'bbq']]
  };

  //hardcode Perry's example
  $scope.Perrys = {
    name: "Perry's Steakhouse & Grille",
    rating: 4.0,
    image: 'http://s3-media3.fl.yelpcdn.com/bphoto/-br-DGSTV4VcLroYw6kg1Q/ms.jpg',
    phone: '5124746300',
    address: ["114 W 7th St",
            "Downtown",
            "Austin, TX 78701"],
    categories: [
        ["Steakhouses",
          "steak"
        ],
        [
          'Seafood',
          'seafood'
        ]
    ]
  };

  $scope.welcome = 'Search Module';

  $scope.searchInput = {
    term: '',
    location: 'Austin'
  }

  $scope.serverReply = [ $scope.Franklin, $scope.Perrys, $scope.Branklin ];

  $scope.alertChange = function(){
    console.log($scope.searchInput.restName);
  }

  $scope.submitSearch = function(){
    var restRequest = {
      // search name entered...
      name: $scope.searchInput.term,
      // default is Austin, but can change...
      city: $scope.searchInput.location
    }
    console.log('Submitted search criterion: ', restRequest);
    //wishful programming...
   // return userSearch( restRequest )();
  }

  // $scope.displayResponse = function( obj ){
  //   console.log('object from resposne :', obj);
  //   obj.map(function(item){
  //   })
  // }


}

 // name: name,
//       rating: rating,
//       image: image_url,
//       phone: phone,
//       address: location
//       category: category

