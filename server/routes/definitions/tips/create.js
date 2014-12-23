'use strict';

var Joi  = require('joi'),
    Tip = require('../../../models/tip');

module.exports = {
  description: 'Create a Tip',
  tags:['tips'],
  validate: {
    payload: {
      date: Joi.date().required(),
      day: Joi.string(),
      sales: Joi.number().required(),
      tips: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Tip.create(request.auth.credentials, request.payload, function(err, noteId){
      reply({noteId:noteId}).code(err ? 400 : 200);
    });
  }
};
