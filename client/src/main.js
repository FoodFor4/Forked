'use strict';





angular.module('tabsDemoDynamicHeight', ['ngMaterial']);

module.exports = function($scope, $http, Services) {


$scope.welcomeMain = 'Main Module';

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
      name: $scope.searchInput.term,
      // default is Austin, but can change...
      city: $scope.searchInput.location
    }
    console.log('Submitted search criterion: ', restRequest);
    //wishful programming...
   // return userSearch( restRequest )();
  }

  // restSearch controller code
  $scope.serverReply;
  $scope.toAdd;

  //value bound to Restaurant/City input on restSearch.html
  $scope.searchInput = {
    term: '',
    location: 'Austin'
  }

  $scope.submitSearch = function(){
    var restRequest = {
      term: $scope.searchInput.term,
      location: $scope.searchInput.location
    }

    Services.yelpSearchResults(restRequest)
    .then(function(resp){
      $scope.serverReply = resp;
      console.log('Populating page with yelp results: ', resp);
    })
    console.log('Submitted search criterion: ', restRequest);
  }

  $scope.addToRestaurants = function(restaurant) {
    console.log('addToRestaurants fired:', restaurant);
    Services.yelpSearchAdd(restaurant);
  }
  //searchcontroller code

  $scope.writeReview = function() {
    console.log("go to create a review page for selected restaurant");
  }

  $scope.seeReview = function() {
    console.log("go to see existing review page for selected restaurant");
  }

<<<<<<< HEAD
  // if ($scope.docCookies.getItem('sessionToken') !== null) {
  //    $scope.mainServerReply = [];
  //    Services.getList()
  //    .then (function( resp ) {
  //      console.log('Array of restaurants received from database :', resp.data);
  //       $scope.mainServerReply = resp.data;
  //       return resp.data;
  //     });
  // } else {
  //   console.log("you're not logged in. dummy data loaded");
    $scope.mainServerReply = [$scope.Franklin,$scope.Perrys,$scope.Uchi,$scope.Tacodeli,$scope.SalvationPizza,$scope.GussWorldFamousFriedChicken,$scope.KerbeyLaneCafe,$scope.MattsFamousElRancho,$scope.PhoPlease ];
  // }


  //docCookies is a library that implements several methods for dealing with cookies
  $scope.docCookies = {
    getItem: function (sKey) {
      if (!sKey) { return null; }
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
      if (!this.hasItem(sKey)) { return false; }
      document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {
      if (!sKey) { return false; }
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  };





$scope.Franklin = {
   name: 'Franklin Barbeque',
   rating: 4.5,
   image: 'http://s3-media1.fl.yelpcdn.com/bphoto/hgki6r-7BTjxdeR7GshAIw/ms.jpg',
   phone: '5124746300',
   address: ["900 E 11th St",
           "East Austin",
           "Austin, TX 78702"],
   categories: ['Barbecue', 'bbq'],
   visited: false
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
   categories: ['Steakhouses', 'Seafood'],
   visited: false
 };


$scope.Uchi = {
   name: "Uchi",
   rating: 4.5,
   image: 'https://s3-media2.fl.yelpcdn.com/bphoto/yYzYBnO0bNjPx_9Az24lYQ/ms.jpg',
   phone: '5129164808',
   address: ["801 S Lamar Blvd",
                    "South Lamar District",
                    "Austin, TX 78704"],
   categories: ['Sushi Bars', 'Japanese'],
   visited: false
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
   categories: ['Mexican', 'Vegetarian'],
   visited: false
 };

$scope.SalvationPizza = {
   name: "Salvation Pizza",
   rating: 3.5,
   image: 'http://s3-media4.fl.yelpcdn.com/bphoto/QC9Jta0rsQ66XTdkIANIvg/ms.jpg',
   phone: '5125350076',
   address: ["624 W 34th St",
                    "University of Texas",
                    "Austin, TX 78705"],
   categories: ['Pizza'],
   visited: true
 };

$scope.GussWorldFamousFriedChicken = {
   name: "Gus's World Famous Fried Chicken",
   rating: 4.0,
   image: 'http://s3-media4.fl.yelpcdn.com/bphoto/veNBHKwcBbjuUzjp4iLubw/ms.jpg',
   phone: '5124744877',
   address: ["117 San Jacinto",
                    "Downtown",
                    "Austin, TX 78701"],
   categories: ['Southern'],
   visited: true
 };

$scope.KerbeyLaneCafe = {
   name: "Kerbey Lane Cafe",
   rating: 4.0,
   image: 'http://s3-media1.fl.yelpcdn.com/bphoto/SsogqJ4lb6cu1I_vNT_VFQ/ms.jpg',
   phone: '5124511436',
   address: ["3704 Kerbey Ln",
                    "Austin, TX 78731"
            ],
   categories: ['Breakfast & Brunch'],
   visited: true
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
   categories: ['Mexican'],
   visited: true
 };


$scope.PhoPlease = {
   name: "Pho Please",
   rating: 4.5,
   image: 'https://s3-media2.fl.yelpcdn.com/bphoto/ZiOYjEsqQWZjwZXr75-vPA/ms.jpg',
   phone: '5123549779',
   address: ["1920 East Riverside Dr",
                    "Oltorf/East Riverside",
                    "Austin, TX 78741"
            ],
   categories: ['Vietnamese'],
   visited: true
 };


}
