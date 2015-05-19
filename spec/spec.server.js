var path            = require('path'),
    chai            = require('chai'),
    Q               = require('q'),
    fs              = require('fs'),
    supertest       = require('supertest'),
    msg             = require('../messages'),
    api             = supertest('http://localhost:3001'),
    readDir         = Q.denodeify(fs.readdir),
    assert          = chai.assert,
    chaiAsPromised  = require('chai-as-promised'),
    expect          = chai.expect;

    chai.use(chaiAsPromised);

var server = require(path.join(__dirname, '..', './server.js'));

describe('Express Crawler Application', function() {
  'use strict';

  describe('Filesystem', function() {
    it('rendered_sitemaps directory should be present', function(done) {
      expect(readDir('rendered_sitemaps')).to.be.fulfilled.notify(done);
    });
  });

  describe('Server', function() {
    it('server is an object', function() {
      expect(server).to.be.an.instanceOf(Object);
    });

    it('server homepage returns 200', function(done) {
      api.get('/')
        .expect(200, msg.home_page, done);
    });

    it('server rendered_sitemaps directory return 200 with correct body message', function(done) {
      api.get('/rendered_sitemaps')
        .expect(200, msg.rendered_sitemaps_msg, done);
    });

    it('server returns 404 for non existent directory', function(done) {
      api.get('/something')
        .expect(404, done);
    });
  });

});
