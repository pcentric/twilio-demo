const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);

module.exports.getPhoneNumber = async (areaCode, limit) => {
  try {
    const data = await client.availablePhoneNumbers('US').local.list({ areaCode, limit });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
