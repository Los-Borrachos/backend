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
	Client.findById({ _id: req.params.id })
		.populate('owner', 'userName')
		.then((record) => {
			res.json(record);
		});
});

//UPDATE 
router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updatedClient = req.body;
	Client.findByIdAndUpdate(id, updatedClient, { new: true}).then((updateClient) => {
		res.json(updateClient);
	})
})

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