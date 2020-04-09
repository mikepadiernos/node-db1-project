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
				res.status(500).json({success: false, message: "Unable to retrieve accounts", error})
			})
	// .post((req, res) => {
	// 	const account = req.body;
	// 	db('accounts')
	// 		.insert
	// })
	});

router
	.route('/:id')
	.get((req, res) => {
		const id = req.params;
		db('accounts')
			// .select('*')
			// .from('accounts')
			.where(id)
			.first()
			.then(account => {
				account
					? res.json({success: true, message: "Account found", account})
					: res.status(400).json({success: false, message: "Account not fount"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve account", error})
			})
	// .put((req, res) => {})
	// .delete((req, res) => {})
	});

module.exports = router;