'use strict';

var express = require('express'),
    sitemaps = require('./controllers/sitemaps'),
    router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to the home page');
});

router.get('/rendered_sitemaps', function(req, res) {
  res.send('This is rendered_sitemaps directory. Within this directory there are defined sitemaps' +
    ' that are divided up into their respected website domain names. Example: <br />' +
    '\n <strong>http://spiderbites.nytimes.com/sitemaps/www.nytimes.com/sitemap.xml.gz</strong> <br />' +
    '\n would have a directory created as: <strong>spiderbites.nytimes.com/</strong>');
});

module.exports = router;
