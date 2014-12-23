/* jshint camelcase:false */

'use strict';

var pg     = require('../postgres/manager');

function Tip(){
}

Tip.create = function(user, obj, cb){
  pg.query('insert into tips(sales, tip, created_at, day, user_id) values ($1, $2, $3, $4)', [obj.sales, obj.tips, obj.date, obj.day, user.id], function(err, results){
    console.log('server/model:err', err);
    console.log('server/model:results', results);
    cb(err, results && results.rows ? results.rows[0].add_note : null);
  });
};

module.exports = Tip;
