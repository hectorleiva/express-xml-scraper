'use strict';

var express = require('express'),
    msg     = require('./messages.js'),
    router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to the home page');
});

router.get('/rendered_sitemaps', function(req, res) {
  res.send(msg.rendered_sitemaps_msg);
});

module.exports = router;
