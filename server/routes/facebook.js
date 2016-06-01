var route = require('express').Router();
var Users = require('../models/users');

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 1215370348482360,
    clientSecret: 10f271f5ffd4ec35465654ea8db9391f,
    callbackURL: "http://localhost:4000"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
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




// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook');
//
// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_CLIENT_ID,
//   clientSecret: process.env.FACEBOOK_APP_SECRET,
//   callbackURL: "http://localhost:4000/auth/facebook/authed"
// },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);
//     Users.findOrCreate({ facebookId: profile.id, facebookName: profile.displayName }).then( function(data) {
//       console.log(data);
//       cb(null, data);
//     }).catch(function(err) {
//       cb(err, null);
//     });
//   }
// ));
//
// passport.serializeUser(function(user, done) {
//   console.log(user);
//   done(null, user);
// })
//
// passport.deserializeUser(function(user, done) {
//   console.log(user);
//   done(null, user);
// })

route.use(passport.initialize());


route.get('/facebook',
  passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages']}));

route.get('/facebook/authed',
  passport.authenticate('facebook', {failureRedirect: '/#/login'}), function(req, res) {
    res.redirect('/');
  })

module.exports = route;
