var router = require('express').Router();
var Users = require('../models/users')

var bcrypt = require('bcrypt')
var uuid = require('uuid');

router.post('/login/', function(req, res) {
	Users.findByName(req.body.name).then(function(data) {
		if(data) {
			bcrypt.compare(req.body.password, data.hashed_password, function(result) {
				if(result) {
					//We matched
					users.createSession(data.user_id).then(function(sessionToken) {
						res.status(200).cookie('sessionToken', sessionToken);
					})
				}
				else {
					//We didn't
					res.status(400).send("Bad Username or Password");
				}
			})
		} else {
			res.status(400).send("User doesn't exist");
		}
	})
})

module.exports = router;