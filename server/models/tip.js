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

module.exports = Tip;
