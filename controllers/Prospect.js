const express = require('express');
const Prospect = require('../models/Prospect');

const router = express.Router();

router.get('/', (req, res) => {
	Prospect.find({}).then((record) => {
		res.json(record);
	});
});

router.get('/:id', (req, res) => {
	Prospect.findById({ _id: req.params.id }).then((record) => {
		res.json(record);
	});
});


router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updatedProspect = req.body;
	Prospect.findByIdAndUpdate(id, updatedProspect, { new: true}).then((updateProspect) => {
		res.json(updateProspect);
	})
})

router.post('/', (req, res) => {
	Prospect.create(req.body).then((record) => {
		res.json(record);
	});
});

router.delete('/:id', (req, res) => {
	Prospect.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;
