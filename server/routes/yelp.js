var yelp = require('node-yelp-api');
var merge = require('merge');
var route = require('express').Router();

var options = {
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
};

route.get('/', function(req, res) {
  yelp.search(merge(options, {
    term: req.body.term,
    location: req.body.location,
    category_filter: 'restaurants'
  }), function(data) {
    res.status(200);
    res.json(data);
  }, function(err) {
    res.status(500).send('Yelp API error');
    console.log(data):
  })
});
