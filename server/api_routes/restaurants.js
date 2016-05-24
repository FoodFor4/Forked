var express =  require('express')
var url = require('url');
var bodyParser = require('body-parser')
var restaurants = require('../models/restaurants')

//Implicitly attached to /restaurants/
var routes = express.Router();


//???

routes.get('/', function(req, res) {
	var arguments = url.parse(req.url, true).query;

	res.status(200).json(arguments);
})

routes.post('/', bodyParser.json(), function(req, res) {
	res.send(202).json(req.body);
})