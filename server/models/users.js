var db = require('../db');


var User = module.exports

User.findOrCreate = function (incomingFbData) {

  var attribs = Object.assign({}, incomingFbData)

  //map fb_data into what we want and save in userInfo
  //fb data is not a promise
  var userInfo = {
    fb_id: attribs.facebookId,
    fb_name: attribs.facebookName
  };


  return db('users').insert(userInfo)
}
