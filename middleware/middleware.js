// IMPORT DATABASES
// const prDb = require('../data/helpers/projectModel');
// const acDb = require('../data/helpers/actionModel');

const logger = (req, res, next) => {
	const method = req.method;
	const endpoint = req.originalUrl;
	const date = new Date();
	console.log(`A ${method} request to ${endpoint} initiated on ${date.toDateString()}`);
	next()
};

module.exports = {
	logger,
};