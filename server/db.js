exports = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
})

exports.schema.createTable('users', function(table) {
  table.increments();
  table.string('name');
  table.string('fb_id');
});

exports.schema.createTable('restaurants', function(table) {
  table.increments();
  table.string('yelp_id');
  table.string('name');
  table.string('address');
  table.string('phone');
  table.string('price');
  table.string('address');
  table.string('photo_url');
});

exports.schema.createTable('user_restaurants', function(table) {
  table.increments();
  table.integer('user_id');
  table.string('yelp_id');
});

