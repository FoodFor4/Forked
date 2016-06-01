var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var db = require('./db');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var yelpApi = require('./routes/yelp');
//var facebookLogin = require('./routes/facebook')
var logout = require('./routes/logout');
var login = require('./routes/login');
var	signup = require('./routes/signup');

var reviewRoutes = require('./api_routes/reviews');
var restRoutes = require('./api_routes/restaurants');
//***************Facebook Authentication Routing********************
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: '1215370348482360',
    clientSecret: '10f271f5ffd4ec35465654ea8db9391f',
    callbackURL: "http://localhost:4000/"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);
    console.log("profile", profile);
    console.log("done", done);
    console.log("id", profile.id);
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
//******************************************************************

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
app.use('/auth/', logout);

var Users = require('./models/users');
app.use(function(req, res, next) {
	console.log(req.url);
	console.log(req.cookies);
	// next();
	if(req.cookies.sessionToken) {
		Users.findSessionByToken(req.cookies.sessionToken).then(function(data) {
			if(data) {
				//console.log(data);
				req.sessionInfo = data;
				next();
			} else {
				//We got a falsy value (undefined/null) so it isn't valid.
				//console.log(data)
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
});


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
