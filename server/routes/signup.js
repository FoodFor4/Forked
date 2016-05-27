var router = require('express').Router();
var Users = require('../models/users')

var bcrypt = require('bcrypt')

router.post('/signup/', function(req, res) {
	//Create a user if it doesn't exist
	//Or error and inform the user that the username is taken, or that some validation failed.
	Users.findByName(req.body.name).then(function(data) {
		if(data) {
			res.status(400).send('Username taken.'); //User error
		}
		else {
			var userData = Object.assign({}, req.body);
			userData.hashed_password = bcrypt.hash(userData.password, null, function(hashed_password) {
				delete userData.password;
				userData.hashed_password = hashed_password;

				Users.create(userData).then(function(data) {
					users.createSession(data.user_id).then(function(sessionToken) {
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