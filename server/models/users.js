var db = require('../db');


var User = module.exports

User.create = function (incomingFbData) {

  var attribs = Object.assign({}, fb_data)

  //map fb_data into what we want and save in userInfo
  //fb data is not a promise
  var userInfo;


  return db('users').insert(userInfo)}


}
