var express =  require('express')
var users = require('../models/users')

//Implicitly attached to /users/
var routes = express.Router();

var url = require('url');

//???

routes.get('/', function(req, res) {
	var arguments = url.parse(req.url, true).query;

	res.status(200);
	res.json(arguments);
})

module.exports = routes;