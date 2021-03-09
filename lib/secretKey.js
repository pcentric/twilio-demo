const speakeasy = require("speakeasy");
const Promise = require("bluebird");

exports.generateSecret = () => {
  return new Promise((resolve, reject) => {
    resolve(speakeasy.generateSecret({ length: 20 }));
  });
};

exports.verifySecret = (secret, token) => {
  return new Promise((resolve, reject) => {
    resolve(
      speakeasy.totp.verify({
        secret,
        token,
        encoding: "base32",
      })
    );
  });
};
