'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Add Expenses to a User',
  tags:['users'],
  validate: {
    payload: {
      rent: Joi.number().required(),
      groceries: Joi.number(),
      utilities: Joi.number(),
      savings: Joi.number(),
      other: Joi.number(),
      percent: Joi.number().required()
    }
  },
  handler: function(request, reply){
    User.profile(request.auth.credentials, request.payload, function(err, results){
      reply().code(err ? 400 : 200);
    });
  }
};
