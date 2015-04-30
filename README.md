## Express Node XML Scraper

A XML Scraper with a front-end facing Express server that scrapes for remote XML files while at the same time offering the saved sitemaps on the Node Express server.

### Set-up
- Run `npm install` to install all the dependancies.
```bash
node app.js --sitemap_index_url=http://www.nytimes-se.com/nytse/sitemap.xml
```

### Express Server
- After everything is successfully created, a local directory `/rendered_sitemaps` will be created.
- Visit `http://localhost:3001/rendered_sitemaps` for additional information on how generated sitemap directories can be accessed.
- Sitemaps will be have a directory created per domain. http://www.nytimes-se.com/nytse/sitemap.xml will create a `nytimes-se.com/` directory and contain all related sitemaps from within that domain.

#### Cron
- This node application features a running internal cron job that can be set using a regular cron expression and using the `cron_schedule=` flag within the CLI command for this job. The following command will scrap on the 30 minute marker the specified sitemap.

```bash
node app.js --site=http://www.nytimes-se.com/nytse/sitemap.xml --cron_schedule="30 * * * *"
```

### Saving
- Files by default are saved into an XML format. Plans for CSV formatting will be made available.
