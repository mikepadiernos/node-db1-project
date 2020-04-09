const express = require("express");
const middle = require("../middleware/middleware");
const db = require("../data/dbConfig.js");

const logger = middle.logger;
const server = express();

server.use(logger, express.json());

module.exports = server;
