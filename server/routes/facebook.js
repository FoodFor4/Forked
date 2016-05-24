var route = require('express').Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var Users = require('../models/users');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:4000/auth/facebook/authed"
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    Users.findOrCreate({ facebookId: profile.id, facebookName: profile.profileName }).then( function(data) {
      console.log(data);
    });
  }
));


route.get('/facebook',
  passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages']}));

route.get('/facebook/authed',
  passport.authenticate('facebook', {failureRedirect: '/#/login'}), function(req, res) {
    res.redirect('/');
  })

module.exports = route;