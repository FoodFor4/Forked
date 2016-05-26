var browserify = require('browserify-middleware')
var passport = require('passport');
var express = require('express');
var app = express();
var db = require('./db')

var session = require('express-session');
var parser = require('cookie-parser');

var yelpApi = require('./routes/yelp')
var facebookLogin = require('./routes/facebook')

var reviewRoutes = require('./api_routes/reviews')
var restRoutes = require('./api_routes/restaurants')

//route to your index.html
app.use('/auth', facebookLogin);

app.use('/', parser());
app.use('/', session({secret: "app secret 45"}));
app.use('/', passport.initialize());
app.use('/', passport.session());
app.use('/', function(req, res, next) {
	console.log(req.user);
	console.log(req.session);
	console.log(req._passport);
	res.sendStatus(404);
})
app.use('/', express.static('client/'));


//browersify which injects all dependencies into index.html
var shared = ['angular'];
app.get('/js/vendor-bundle.js', browserify(shared));
app.get('/js/app-bundle.js', browserify('./client/app.js', { external: shared }));

// Router attachments

app.use('/yelp-api', yelpApi);

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
