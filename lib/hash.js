const bcrypt = require("bcrypt");
const Promise = require("bluebird");

module.exports.generateHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function (error, hash) {
      if (error) {
        reject(error);
      } else {
        resolve(hash);
      }
    });
  });
};

module.exports.compareHash = (newData, oldHash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(newData, oldHash, function (error, same) {
      if (error) {
        reject(error);
      } else {
        resolve(same);
      }
    });
  });
};
