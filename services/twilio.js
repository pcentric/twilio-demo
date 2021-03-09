const accountSid = 'AC0eff5bb0646d4890f4b3a1229b796aaa';
const authToken = '764b502ad4e24bd8110472fa27c3eeea';
const client = require('twilio')(accountSid, authToken);

module.exports.getPhoneNumber = async (areaCode, country) => {
  try {
    const data = await client.availablePhoneNumbers(country).local.list({ areaCode, limit: 20 });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
