var api = require('express').Router();

var posts = require('./posts.js');
var users = require('./users/base.js');

api.get('/', function(req, res, next) {
    // res.send() our response here
  });

api.use('/posts', posts);
api.use('/user', users);

module.exports = api;