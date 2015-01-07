'use strict';

var Joi  = require('joi'),
    Tip = require('../../../models/tip');

module.exports = {
  description: 'Show Note',
  tags:['notes'],
  validate: {
    params: {
      tipId: Joi.number().required()
    }
  },
  cors:{origin: ['http://localhost:8100'],credentials: true},
  handler: function(request, reply){
    Tip.show(request.auth.credentials, request.params.tipId, function(err, tip){
      reply(tip).code(err ? 400 : 200);
    });
  }
};
