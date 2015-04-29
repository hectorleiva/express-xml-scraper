'user strict';

var express = require('express'),
    router = require('./routes'),
    app = express();

app.use(router);

module.exports.getServer = app.listen(3001, function() {
  console.log('Listening on port %d in %s mode', this.address().port, process.env.NODE_ENV);
});
