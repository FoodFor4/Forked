var route = require('express').Router();
var Users = require('../models/users');
var app = express();

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
