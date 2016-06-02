var db = require('../db');
var uuid = require('uuid');


var User = module.exports;

User.create = function (userObj) {
  var usrObj = {
    hashed_password: userObj.hashed_password,
    user_name: userObj.username
  };
  return db('users').insert(usrObj).then(function (data) {
    //Assume data back is the inserted object?
    return data;
  })
};

User.createSession = function (userId) {
  //We just hope this works honestly.
  var sessionToken = uuid.v4();
  return db('sessions').insert({
    user_id: userId,
    sessionToken :sessionToken
  }).then(function (data) {
    return sessionToken;
  })
};

//Find functions return first result
//Implied to be only result
User.findByName = function (name) {
  return db('users').where({
    user_name: name
  }).then(function (data) {
    return data[0];
  })
};

User.findById = function (id) {
  return db('users').where({
    user_id: id
  }).then(function (data) {
    return data[0];
  })
};

User.findSessionByToken = function (token) {
  return db('sessions').where({
    sessionToken: token
  }).then(function (data) {
    return data[0];
  })
};

User.deleteSessionToken = function(token){
  return db('sessions').where({sessionToken: token}).del();
};
