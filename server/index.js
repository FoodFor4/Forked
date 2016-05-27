var browserify = require('browserify-middleware')
var express = require('express');
var app = express();
var db = require('./db')

var cookieParser = require('cookie-parser');

var yelpApi = require('./routes/yelp')
//var facebookLogin = require('./routes/facebook')

var login = require('./routes/login'),
	signup = require('./routes/signup');

var reviewRoutes = require('./api_routes/reviews')
var restRoutes = require('./api_routes/restaurants')

//Homebrew authentication middleware
app.use(cookieParser());

//We redirect until the user has an sessionToken.
//We don't even check it.
//How horrifying.
var Users = require('./models/users');
app.use(function(req, res, next) {
	if(req.cookies.sessionToken) {
		Users.findSessionByToken(req.cookies.sessionToken).then(function(data) {
			if(data) {
				//If we see it, it is valid.
				next();
			} else {
				//We got a falsy value (undefined/null) so it isn't valid.
				res.redirect('/#/login');
			}
		}).catch(function(err) {
			//Internal server error
			res.sendStatus(500);
		});
	} else if(req.url === '/') {
		//Let user fall through to login
		next();
	} else {
		//Redirect a wayward user to / on the server, and /#/login on the client side routing.
		res.redirect('/#/login');
	}
})

app.use('/auth/', login);
app.use('/auth/', signup);

//route to your index.html
app.use(express.static('client/'));

//browersify which injects all dependencies into index.html
var shared = ['angular'];
app.get('/js/vendor-bundle.js', browserify(shared));
app.get('/js/app-bundle.js', browserify('./client/app.js', { external: shared }));

// Router attachments

app.use('/yelp-api', yelpApi);
//app.use('/auth', facebookLogin);

app.use('/reviews', reviewRoutes);
app.use('/restaurants', restRoutes);


if(process.env.NODE !== 'test') {
	var port = process.env.PORT || 4000;
	app.listen(port);
	db.ensureSchema();
	console.log("Listening on port", port);
} else {
	exports = app;
}
