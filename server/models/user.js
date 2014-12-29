'use strict';

var bcrypt  = require('bcrypt'),
    pg      = require('../postgres/manager');

function User(obj){
  this.username = obj.username;
}

User.register = function(obj, cb){
  var user = new User(obj);
  user.password = bcrypt.hashSync(obj.password, 8);

  pg.query('insert into users (username, password) values ($1, $2) returning id', [user.username, user.password], function(err, results){
      if(err){
        return cb(true);
      }else{
        return cb(false);
      }
  });
};

User.login = function(obj, cb){
  pg.query('select * from users where username = $1 limit 1', [obj.username], function(err, results){
    if(err || !results.rowCount){return cb();}
    var isAuth = bcrypt.compareSync(obj.password, results.rows[0].password);
    if(!isAuth){return cb();}
    var user = results.rows[0];
    delete user.password;
    cb(user);
  });
};

User.addProfile = function(user, obj, cb){
    pg.query('insert into expenses(user_id, rent, groceries, utilities, savings, other, percent) values ($1, $2, $3, $4, $5, $6, $7)',[user.id, obj.rent, obj.groceries, obj.utilities, obj.savings, obj.other, obj.percent], function(err, results){
        cb(err, null);
    });
};

module.exports = User;
