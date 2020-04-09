const express = require("express");
const middle = require("../middleware/middleware");

const logger = middle.logger;
const server = express();

server.use(logger, express.json());

const accounts = require('../routers/accounts-router.js');

server
	.route('/')
		.get((req, res) => {
			res.send(`Ludicrous speed, GO!`);
		});

server.use('/api/accounts', accounts);
server.use('/accounts', accounts);

module.exports = server;
