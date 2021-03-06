mocha=@./node_modules/.bin/mocha
sitemap=--sitemap_index_url=http://www.att.com/sitemap.xml
test-server=spec/spec.server.js

test-server:
	$(mocha) $(test-server) $(sitemap)
test_%:
	$(mocha) spec/spec.$*.js

test: test-server
