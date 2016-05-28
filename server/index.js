var browserify = require('browserify-middleware')
var express = require('express');
var app = express();
var db = require('./db')

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var yelpApi = require('./routes/yelp')
//var facebookLogin = require('./routes/facebook')

var login = require('./routes/login'),
	signup = require('./routes/signup');

var reviewRoutes = require('./api_routes/reviews')
var restRoutes = require('./api_routes/restaurants')

app.use(express.static('client/'));

//browersify which injects all dependencies into index.html
var shared = ['angular'];
app.get('/js/vendor-bundle.js', browserify(shared));
app.get('/js/app-bundle.js', browserify('./client/app.js', { external: shared }));

//Homebrew authentication middleware
app.use(cookieParser());

//We redirect until the user has an sessionToken.
//We don't even check it.
//How horrifying.

app.use('/auth/', bodyParser.json());
app.use('/auth/', login);
app.use('/auth/', signup);

var Users = require('./models/users');
app.use(function(req, res, next) {
	console.log(req.url);
	console.log(req.cookies)
	// next();
	if(req.cookies.sessionToken) {
		Users.findSessionByToken(req.cookies.sessionToken).then(function(data) {
			if(data) {
				console.log(data);
				req.sessionInfo = data;
				next();
			} else {
				//We got a falsy value (undefined/null) so it isn't valid.
				console.log(data)
				res.redirect('/');
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
		res.redirect('/');
	}
})


//route to your index.html

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
