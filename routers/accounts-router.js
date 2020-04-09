const express = require('express');
const router = express.Router();
const db = require("../data/dbConfig.js");

router
	.route('/')
	.get((req, res) => {
		db('accounts')
			.then(accounts => {
				res.json(accounts)
			})
			.catch(error => {
				res.status(500).json({success: false, message: "No accounts retrieved", error})
			})
	});

module.exports = router;