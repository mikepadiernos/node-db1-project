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
	})
	.post((req, res) => {
		const account = req.body;
		db('accounts')
			.insert(account)
			.then(id => {
				console.log("account: ",id);
				res.json({success: true, message: "Account added", id: id, account})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add account", error})
			})
	});

router
	.route('/:id')
	.get((req, res) => {
		const id = req.params;
		db('accounts')
			.where(id)
			.first()
			.then(account => {
				account
					? res.json({success: true, message: "Account found", account})
					: res.status(400).json({success: false, message: "Account not found"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve account", error})
			})
	})
	.put((req, res) => {
		const id = req.params;
		const updates = req.body;
		db('accounts')
			.where(id)
			.update(updates)
			.then(count => {
				count > 0
					? res.json({success: true, message: "Account updated"})
					: res.status({success: false, message: "Account not updated"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to update account", error})
			})
	})
	.delete((req, res) => {
		const id = req.params;
		db('accounts')
			.where(id)
			.del()
			.then(count => {
				count > 0
					? res.json({success: true, message: "Account removed"})
					: res.status({success: false, message: "Account not removed"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to remove account", error})
			})

	});

module.exports = router;