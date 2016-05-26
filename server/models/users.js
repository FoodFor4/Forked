var db = require('../db');


var User = module.exports

User.findOrCreate = function (incomingFbData) {
// incomingFbData = { id: '1013808918710063',
//  username: undefined,
//  displayName: 'Zackery Perryman',
//  name: 
//   { familyName: undefined,
//     givenName: undefined,
//     middleName: undefined },
//  gender: undefined,
//  profileUrl: undefined,
//  provider: 'facebook',
//  _raw: '{"name":"Zackery Perryman","id":"1013808918710063"}',
//  _json: { name: 'Zackery Perryman', id: '1013808918710063' } }

//User.create = function (incomingFbData) {

  var attribs = Object.assign({}, incomingFbData)

  //map fb_data into what we want and save in userInfo
  //fb data is not a promise
  var userInfo = {
    fb_id: attribs.facebookId,
    fb_name: attribs.facebookName
  };
  // var userInfo = {};

  // userInfo.fb_id = attribs.id;
  // userInfo.fb_name = attribs.displayName; 
  
  console.log("created user: ", userInfo)

  return User.findByFbId(userInfo.fb_id).then(function(data) {
    if(!data) {
      return db('users').insert(userInfo).then(function(data) {
        console.log("Created user data", data)
        userInfo.id = data[0];
        return userInfo;
      })
    } else {
      console.log("Found user data", data);
      return data;
    }
  })
}

User.findByFbId = function (id) {
  return db('users').where({ fb_id: id }).limit(1)
    .then(function (rows) {
      return rows[0]
    })
}
