const express = require('express');
const Prospect = require('../models/Prospect');

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

//UPDATE 
router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updatedProspect = req.body;
	Prospect.findByIdAndUpdate(id, updatedProspect, { new: true}).then((updateProspect) => {
		res.json(updateProspect);
	})
})

// post new prospect record
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
