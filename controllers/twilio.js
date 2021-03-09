const twilioService = require('../services/twilio');
module.exports.getPhoneNumber = (req, res) => {
  twilioService
    .getPhoneNumber(req.params.areacode, req.params.country)
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((error) => {
      return res.status(500).send({ ErrorOccured: error });
    });
};
