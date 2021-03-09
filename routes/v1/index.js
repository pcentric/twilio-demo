const twilioRoutes = require('./twilio');
const checkAuth = require('../../middleware/checkAuth');
module.exports = function (app) {
  app.use(`/api/twilio`, checkAuth, twilioRoutes);
};
