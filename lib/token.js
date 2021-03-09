const jwt = require("jsonwebtoken");
const Promise = require("bluebird");
require("dotenv").config({
  allowEmptyValues: true,
});
exports.generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, function (
      error,
      token
    ) {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};

exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, function (error, decoded) {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};
