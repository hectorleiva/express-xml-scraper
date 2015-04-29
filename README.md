# NOT A RELEASE CANDIDATE YET

## Express Node XML Scraper

A XML Scraper with a front-end facing Express server that scrapes for remote XML files while at the same time offering the saved sitemaps on the Node Express server.

### Set-up
- Run `npm install` to install all the dependancies.
```bash
node app.js --site=http://www.nytimes-se.com/nytse/sitemap.xml
```

#### Cron
- This node application features a running internal cron job that can be set using a regular cron expression and using the `cron_schedule=` flag within the CLI command for this job. The following command will scrap on the 30 minute marker the specified sitemap.

```bash
node app.js --site=http://www.nytimes-se.com/nytse/sitemap.xml --cron_schedule="30 * * * *"
```

### Saving
- Files by default are saved into an XML format. Plans for CSV formatting will be made available.
