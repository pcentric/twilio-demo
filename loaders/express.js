const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config({
  allowEmptyValues: true,
});

const app = express();

app.use(morgan("dev"));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// secure apps by setting various HTTP headers
app.use(helmet());

app.use(cors());

module.exports = app;
