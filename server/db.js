var knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});


module.exports = knex;


knex.ensureSchema = function () {
  return Promise.all([
    knex.schema.hasTable('users').then(function (exists) {
      if(!exists) {
        knex.schema.createTable('users', function(table) {
          table.increments('user_id').primary();
          table.string('fb_name');
          table.string('fb_id');
        }).then(function (table) {
          console.log("created users table")
        })
      }
    }),

    knex.schema.hasTable('restaurants').then(function (exists) {
      if(!exists) {
        exports.schema.createTable('restaurants', function(table) {
          table.increments('rest_id').primary();
          table.string('yelp_id');
          table.string('name');
          table.string('address');
          table.string('phone');
          table.string('price');
          table.string('photo_url');
        }).then(function (table) {
          console.log("created restaurants table")
        })
      }
    }),

    knex.schema.hasTable('buckets').then(function (exists) {
      if(!exists) {
        knex.schema.createTable('buckets', function(table) {
          table.increments();
          table.foreign('user_id').references('users');
          table.foreign('rest_id').references('restaurants');
          table.string('category');
        }).then(function (table) {
          console.log("created buckets table")
        })
      }
    })

  ])
}

