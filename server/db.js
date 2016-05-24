
var knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});

/*var knex = require('knex')({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './test.db'
  }
})*/


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
          table.string('phone', 15);
          table.string('food_categories');
          table.string('photo_url');
          table.string('yelp_rating');          
        }).then(function (table) {
          console.log("created restaurants table")
        })
      }
    }),

    knex.schema.hasTable('buckets').then(function (exists) {
      if(!exists) {
        knex.schema.createTable('buckets', function(table) {
          table.increments();
          table.integer('user_id');
          table.integer('rest_id');
          table.foreign('user_id').references('users.user_id');
          table.foreign('rest_id').references('restaurants.rest_id');
          table.string('category');
        }).then(function (table) {
          console.log("created buckets table")
        })
      }
    }),

    knex.schema.hasTable('reviews').then(function (exists) {
      if(!exists) {
        knex.schema.createTable('reviews', function(table) {
          table.increments();
          table.integer('user_id');
          table.integer('rest_id');
          table.foreign('user_id').references('users.user_id');
          table.foreign('rest_id').references('restaurants.rest_id');
          table.integer('user_rating');
          table.string('review', 140);
          table.string('price');
        }).then(function (table) {
          console.log("created reviews table")
        })
      }
    })

  ])
}

