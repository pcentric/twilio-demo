require("dotenv").config();
module.exports = {
  appHost:
    process.env.NODE_ENV === "DEV"
      ? process.env.REACT_APP_DEV_HOST
      : process.env.REACT_APP_PROD_HOST,
  port:
    process.env.NODE_ENV === "DEV"
      ? process.env.APP_DEV_PORT
      : process.env.NODE_ENV === "STAGING"
      ? process.env.APP_STAGE_PORT
      : process.env.APP_PROD_PORT,
  db:
    process.env.NODE_ENV === "DEV"
      ? process.env.MONGODB_DEV_CONNECTION_STRING
      : process.env.NODE_ENV === "STAGING"
      ? process.env.MONGODB_STAGE_CONNECTION_STRING
      : process.env.MONGODB_PROD_CONNECTION_STRING,
  redisPort:
    process.env.NODE_ENV === "DEV"
      ? process.env.REDIS_DEV_PORT
      : process.env.REDIS_PROD_PORT,
  redisHost:
    process.env.NODE_ENV === "DEV"
      ? process.env.REDIS_DEV_HOST
      : process.env.REDIS_PROD_HOST,
};
  