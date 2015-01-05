/*jshint camelcase:false*/
'use strict';
var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Add Expenses to a User',
  tags:['users'],
  validate: {
    payload: {
      id: Joi.number(),
      rent: Joi.string().required(),
      groceries: Joi.string(),
      utilities: Joi.string(),
      savings: Joi.string(),
      other: Joi.string(),
      percent: Joi.string().required(),
      user_id: Joi.number()
    }
  },
  handler: function(request, reply){
    User.edit(request.auth.credentials, request.payload, function(err, results){
      console.log(request.payload);
      reply().code(err ? 400 : 200);
      console.log('server/routes: err', err);
      console.log('server/routes: results', results);
    });
  }
};
