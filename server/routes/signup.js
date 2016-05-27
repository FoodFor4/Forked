var router = require('express').Router();
var Users = require('../models/users')

var bcrypt = require('bcrypt-nodejs')

router.post('/signup/', function(req, res) {
	//Create a user if it doesn't exist
	//Or error and inform the user that the username is taken, or that some validation failed.
	Users.findByName(req.body.name).then(function(data) {
		if(data) {
			res.status(400).send('Username taken.'); //User error
		}
		else {
			var userData = Object.assign({}, req.body);
			userData.hashed_password = bcrypt.hash(userData.password, null, null, function(err, data) {
				delete userData.password;
				userData.hashed_password = data;

				Users.create(userData).then(function(data) {
					Users.createSession(data.user_id).then(function(sessionToken) {
						res.status(202).cookie('sessionToken', sessionToken).json(data);
					})
				}).catch(function (err) {
					console.log("Create user error", err);
					res.status(500).send('Unknown error occured.')
				});
			});
		}
	});
});

module.exports = router;