/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Tip(){
}

Tip.create = function(user, obj, cb){
  pg.query('insert into tips(user_id, sales, tip, created_at, day) values ($1, $2, $3, $4, $5)', [user.id, obj.sales, obj.tips, obj.date, obj.day], function(err, results){
    cb(err, null);
  });
};

Tip.show = function(user, tipId, cb){
    pg.query('select * from tips where user_id = $1 and id = $2', [user.id, tipId], function(err, results){
        cb(err, results && results.rows ? results.rows[0] : null);
    });
};

Tip.query = function(user, cb){
    pg.query('select * from total_averages($1)',[user.id], function(err, results1){
        cb(err, results1, function(user, cb){
            pg.query('select * from averages_by_day($1)',[user.id], function(err, results2){
                cb(err, results2,  function(user, cb){
                    pg.query('select * from progress_to_goals($1)',[user.id], function(err, results3){
                        cb(err, results3)
                    });
                });
            });
        });
    });
};

module.exports = Tip;
