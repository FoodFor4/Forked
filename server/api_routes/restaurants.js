var express =  require('express');
var url = require('url');
var bodyParser = require('body-parser');
var restaurants = require('../models/restaurants');
var buckets = require('../models/buckets')

//Implicitly attached to /restaurants/
var routes = express.Router();

routes.get('/', function(req, res) {
	var URLarguments = url.parse(req.url, true).query;

	restaurants.find(URLarguments).then(function(data) {
		console.log('restaurants get', data);
		res.status(200).json(data);
	}).catch(function(err) {
		console.log('restaurants get err', err);
		res.status(500).send('Server Error');
	})
})

routes.post('/been/', bodyParser.json(), function(req, res) {
	console.log("POST /restaurants/been/ req.body =",req.body)
	buckets.switchToBeenBucket(req.body.rest_id, req.body.user_id).then(function(data) {
		console.log('after switch to been data =', data);
		res.status(202).json(data);
	}).catch(function(err) {
		console.log('been there post err', err);
		res.status(500).send('Server Error');
	})
})

routes.post('/wishlist/', bodyParser.json(), function(req, res) {
	buckets.switchToWishBucket(req.body.rest_id, req.body.user_id).then(function(data) {
		// console.log('restaurants post', data);
		res.status(202).json(data);
	}).catch(function(err) {
		console.log('restaurants post err', err);
		res.status(500).send('Server Error');
	})
});

routes.get('/all/', function(req, res) {
	restaurants.findAllAttachedToUserId(req.sessionInfo.user_id).then(function(data) {
		res.status(200).json(data);
	}).catch(function(err) {
		res.status(500).send('Server Error');
	})
});

routes.post('/', bodyParser.json(), function(req, res) {
	restaurants.findOrCreate(req.body, req.sessionInfo.user_id).then(function(data) {
		// console.log('restaurants post', data);
		res.status(202).json(data);
	}).catch(function(err) {
		console.log('restaurants post err', err);
		res.status(500).send('Server Error');
	})
});

module.exports = routes;