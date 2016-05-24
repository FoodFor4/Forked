var express =  require('express')
var reviews = require('../models/reviews')

//Implicitly attached to /reviews/
var routes = express.Router();

var url = require('url');

//???

routes.get('/', function(req, res) {
	var arguments = url.parse(req.url, true).query;

	res.status(200);
	res.json(arguments);
})