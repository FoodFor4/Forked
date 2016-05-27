var express =  require('express')
var url = require('url');
var bodyParser = require('body-parser')
var restaurants = require('../models/restaurants')

//Implicitly attached to /restaurants/
var routes = express.Router();


//???

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

routes.get('/all/', function(req, res) {
	restaurants.findAllAttachedToUserId(req.sessionInfo.user_id).then(function(data) {
		res.status(200).json(data);
	}).catch(function(err) {
		res.status(500).send('Server Error');
	})
})

routes.post('/', bodyParser.json(), function(req, res) {
	restaurants.findOrCreate(req.body).then(function(data) {
		console.log('restaurants post', data);
		res.status(202).json(data);
	}).catch(function(err) {
		console.log('restaurants post err', err);
		res.status(500).send('Server Error');
	})
})

module.exports = routes;