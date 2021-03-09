const express = require('express');
const twilioController = require('../../controllers/twilio');
const router = express.Router();
router.route('/get-phone/:areacode/:limit').get(twilioController.getPhoneNumber);

module.exports = router;
