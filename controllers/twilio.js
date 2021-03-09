const sqlClient = require('../loaders/sql');
const twilioService = require('../services/twilio');
module.exports.getPhoneNumber = (req, res) => {
  twilioService
    .getPhoneNumber(req.params.areacode, Number(req.params.limit))
    .then((apiData) => {
      const query = `
INSERT INTO api_logs (area_code, available_numbers)
VALUES (${req.params.areacode}, '${JSON.stringify(apiData)}')
`;
      sqlClient
        .query(query)
        .then((data) => {
          return res.status(200).send({
            success: true,
            available_number: apiData,
          });
        })
        .catch((error) => {
          return res.status(500).send(error);
        });
    })
    .catch((error) => {
      return res.status(500).send({ success: false, ErrorOccured: error });
    });
};
