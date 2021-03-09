const twilioRoutes = require('./twilio');

module.exports = function (app) {
  app.use(`/api/twilio`, twilioRoutes);
};
