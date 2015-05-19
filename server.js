'use strict';

var express              = require('express'),
    router               = require('./routes'),
    simple_xml_scraper   = require('simple-xml-scrapper'),
    app = express();

app.use(router);
app.use('/rendered_sitemaps', express.static(__dirname + '/rendered_sitemaps'));

module.exports.getServer = app.listen(3001, function() {
  console.log('Listening on port %d in %s mode', this.address().port, process.env.NODE_ENV);
});
