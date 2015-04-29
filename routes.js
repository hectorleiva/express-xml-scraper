'use strict';

var express = require('express'),
    sitemaps = require('./controllers/sitemaps'),
    router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to the home page');
});

router.get('/rendered_sitemaps', sitemaps.findRenderedSitemaps);

module.exports = router;
