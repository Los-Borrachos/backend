const express = require('express');
const Client = require('../models/Client');

const router = express.Router();
// Grabs and sends all records
router.get('/', (req, res) => {
	Client.find({}).then((record) => {
		res.json(record);
	});
});
// Grab by id
router.get('/:id', (req, res) => {
	Client.findById({ _id: req.params.id }).then((record) => {
		res.json(record);
	});
});
// post new client record
router.post('/', (req, res) => {
	Client.create(req.body).then((record) => {
		res.json(record);
	});
});
// delete by id
router.delete('/:id', (req, res) => {
	Client.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;