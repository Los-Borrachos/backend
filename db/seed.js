const clients = require('./clients.json');
const Client = require('../models/Client');

const prospects = require('./prospects.json');
const Prospect = require('../models/Prospect');

Client.deleteMany({})
	.then(() => {
		return Client.insertMany(clients);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});

Prospect.deleteMany({})
	.then(() => {
		return Prospect.insertMany(prospects);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
