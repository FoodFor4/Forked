var express =  require('express');
var reviews = require('../models/reviews');

//Implicitly attached to /reviews/
var routes = express.Router();

var url = require('url');
var bodyParser = require('body-parser');


//???

routes.get('/', function(req, res) {
	var arguments = url.parse(req.url, true).query;
    console.log(req.sessionInfo);
	reviews.getUserReview(req.sessionInfo.user_id, arguments.rest_id)
		.then(function(data) {
			console.log('Reviews get', data);
			res.status(200).json(data);
		})
		.catch(function(err){
			console.log('Reviews get err', err);
			res.status(500).send('Server Error.');
		})
});

routes.post('/', bodyParser.json(), function(req, res) {
	var args = req.body;
console.log(req.body);
	args.user_id = req.sessionInfo.user_id;

	reviews.addNew(args).then(function(data) {
		console.log('Reviews post', data);
		res.status(202).json(data);
	}).catch(function(err) {
		console.log('Reviews post err', err);
		res.status(500).send("Server Error.");
	})
});

module.exports = routes;
