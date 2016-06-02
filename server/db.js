// var knex = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: 'knex,public'
// });

var knex = require('knex')({

    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'test'
    },
    pool: {
        min: 2,
        max: 10
    }

});


module.exports = knex;

var facebooktoggle = true;

knex.ensureSchema = function () {
    return Promise.all([
        knex.schema.hasTable('users').then(function (exists) {

            if (facebooktoggle) {
                knex.schema.dropTable('sessions').then(function () {
                    console.log('sessions dropped');
                    knex.schema.dropTable('buckets');
                }).then(function () {
                    console.log('buckets dropped');
                    knex.schema.dropTable('reviews');
                }).then(function () {
                    console.log('reviews dropped');

                }).then(function () {

                    knex.schema.dropTable('users').then(function () {
                        console.log("created facebook users table");
                    }).then(function () {
                        knex.schema.createTable('users', function (table) {
                            table.integer('user_id').primary();
                            table.string('user_name');
                            table.string('hashed_password');
                            //table.string('fb_name');
                            //table.string('fb_id');
                        }).then(function (table) {
                            console.log("created users table")
                        })
                    });

                })
            }

            if (!exists) {
                knex.schema.createTable('users', function (table) {
                    table.increments('user_id').primary();
                    table.string('user_name');
                    table.string('hashed_password');
                    //table.string('fb_name');
                    //table.string('fb_id');
                }).then(function (table) {
                    console.log("created users table")
                })
            }
        }),
////
        knex.schema.hasTable('restaurants').then(function (exists) {
            if (!exists) {
                knex.schema.createTable('restaurants', function (table) {
                    table.increments('rest_id').primary();
                    table.string('yelp_id');
                    table.string('name');
                    table.string('address');
                    table.string('phone', 15);
                    table.string('categories');
                    table.string('image');
                    table.string('yelp_rating');
                }).then(function (table) {
                    console.log("created restaurants table")
                })
            }
        }),

        knex.schema.hasTable('buckets').then(function (exists) {
            if (!exists) {
                knex.schema.createTable('buckets', function (table) {
                    table.increments('bucket_id').primary();
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
        // knex.schema.dropTable('reviews'),

        knex.schema.hasTable('reviews').then(function (exists) {

            if (exists) {
                knex.schema.dropTable('reviews').then(function () {
                    knex.schema.createTable('reviews', function (table) {
                        table.increments('id').primary();
                        table.integer('user_id');
                        table.integer('rest_id');
                        table.foreign('user_id').references('users.user_id');
                        table.foreign('rest_id').references('restaurants.rest_id');
                        table.string('user_rating');
                        table.string('review', 140);
                        table.string('price');
                    }).then(function (table) {
                        console.log("created reviews table")
                    })
                });
                console.log('dropping reviews');
            }


            if (!exists) {
                knex.schema.createTable('reviews', function (table) {
                    table.increments('id').primary();
                    table.integer('user_id');
                    table.integer('rest_id');
                    table.foreign('user_id').references('users.user_id');
                    table.foreign('rest_id').references('restaurants.rest_id');
                    table.string('user_rating');
                    table.string('review', 140);
                    table.string('price');
                }).then(function (table) {
                    console.log("created reviews table")
                })
            }
        }),

        knex.schema.hasTable('sessions').then(function (exists) {
            if (!exists) {
                knex.schema.createTable('sessions', function (table) {
                    table.increments();
                    table.integer('user_id');
                    table.string('sessionToken');
                    table.foreign('user_id').references('users.user_id');
                }).then(function (table) {
                    console.log("created sessions table")
                })
            }
        })

<<<<<<< 71b2030989088d27e8abeeece40e70c0b4bb3330
  ])
=======
    ])
>>>>>>> facebook database changes 2
};
