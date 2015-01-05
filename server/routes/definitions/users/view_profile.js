'use strict';

var User = require('../../../models/user');

module.exports = {
  description: 'Show User Profile',
  tags:['users'],
  validate: {
    params: {
    }
  },
  cors:{origin: ['http://localhost:8100'],credentials: true},
  handler: function(request, reply){
    User.show(request.auth.credentials, function(err, user){
      reply(user).code(err ? 400 : 200);
    });
  }
};
