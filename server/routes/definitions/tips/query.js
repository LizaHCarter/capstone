'use strict';

var Tip = require('../../../models/tip');

module.exports = {
  description: 'Show All Data ',
  tags:['notes'],
  validate: {
  },
  cors:{origin: ['http://localhost:8100'],credentials: true},
  handler: function(request, reply){
    Tip.query(request.auth.credentials, function(err, results){
      reply(results).code(err ? 400 : 200);
    });
  }
};
