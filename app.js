const app = require('./loaders/express');
const versionOneRoutes = require('./routes/v1');
const swaggerUi = require('swagger-ui-express');
const { UI } = require('bull-board');
const sqlClient = require('./loaders/sql');
const compression = require('compression');
const Sentry = require('@sentry/node');
const useSchema = (schema) => (...args) => swaggerUi.setup(schema)(...args);
process.on('uncaughtException', function (err) {
  console.error(err);
  console.log('[Unhandled Exception] Node NOT Exiting...');
});

process.on('unhandledRejection', (err) => {
  console.error(err);
  console.log('[Unhandled Rejection] Node NOT Exiting...');
});
// compress all responses
app.use(compression());
/**
 * Service method
 */

versionOneRoutes(app);
sqlClient
  .connect()
  .then(() => {
    console.log('connected to db');
  })
  .catch((error) => {
    console.log('Error to db', error);
    process.exit(1);
  });
//Swagger setup v1/v2
app.get('/docs', (req, res) => {
  res.redirect('/api/v2/docs');
});

Sentry.init({
  dsn: 'https://761760c657444fe388bcdea28da59d56@o440186.ingest.sentry.io/5410019',
});
app.use(Sentry.Handlers.requestHandler());

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

module.exports = app;
