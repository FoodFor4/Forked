var router = require('express').Router();
var Users = require('../models/users')

var bcrypt = require('bcrypt-nodejs')

router.post('/login/', function(req, res) {
	Users.findByName(req.body.username).then(function(data) {
		if(data) {
			bcrypt.compare(req.body.password, data.hashed_password, function(err, result) {
				if(result) {
					//We matched
					Users.createSession(data.user_id).then(function(sessionToken) {
						res.status(200).cookie('sessionToken', sessionToken).json({user_id: data.user_id});
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
	}).catch(function(err) {
		console.log('Login Error', err);
	})
})

module.exports = router;