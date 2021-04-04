const express = require('express');
const Client = require('../models/Client');

const router = express.Router();

router.get('/', (req, res) => {
	Client.find({}).then((record) => {
		res.json(record);
	});
});

router.get('/:id', (req, res) => {
	Client.findById({ _id: req.params.id })
		.populate('owner', 'userName')
		.then((record) => {
			res.json(record);
		});
});


router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updatedClient = req.body;
	Client.findByIdAndUpdate(id, updatedClient, { new: true}).then((updateClient) => {
		res.json(updateClient);
	})
})

router.post('/', (req, res) => {
	Client.create(req.body).then((record) => {
		res.json(record);
	});
});


router.delete('/:id', (req, res) => {
	Client.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;