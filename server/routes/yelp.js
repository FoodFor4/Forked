var yelp = require('node-yelp');
var merge = require('merge');
var route = require('express').Router();
var url   = require('url');

var client = yelp.createClient({
  oauth: {
    consumer_key: process.env.YELP_CONSUMER_KEY,
    consumer_secret: process.env.YELP_CONSUMER_SECRET,
    token: process.env.YELP_TOKEN,
    token_secret: process.env.YELP_TOKEN_SECRET
  }

  // httpClients: {
  //   maxSockets: 10
  // }
})

route.get('/', function(req, res) {
  var queryData = url.parse(req.url, true).query;

  console.log(queryData);

  client.search({
    term: queryData.term,
    //category_filter: 'restaurants',
    limit: 10,
    location: queryData.location,
    sort: 0
  }).then(function(data) {
    var modifiedData = data.businesses.map( (dat) => { return {
      name: dat.name,
      rating: dat.rating,
      phone: dat.phone.slice(0, 3) + '-' + dat.phone.slice(3, 6) + '-' + dat.phone.slice(6, 10),
      image: dat.image_url,
      categories: dat.categories,
      address: dat.location.display_address
    }; })

    res.status(200).json(modifiedData);
  }).catch(function(err) {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = route;
