const express = require('express');
const Prospect = require('../models/Prospects');

const router = express.Router();
// Grabs and sends all records
router.get('/', (req, res) => {
	Prospect.find({}).then((record) => {
		res.json(record);
	});
});
// Grab by id
router.get('/:id', (req, res) => {
	Prospect.findById({ _id: req.params.id }).then((record) => {
		res.json(record);
	});
});
// post new client record
router.post('/', (req, res) => {
	Prospect.create(req.body).then((record) => {
		res.json(record);
	});
});
// delete by id
router.delete('/:id', (req, res) => {
	Prospect.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;
