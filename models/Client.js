const mongoose = require('../db/connection');
const ClientSchema = new mongoose.Schema({
	name: String,
	organization: String,
	email: String,
	phoneNumber: String,
	nextSteps: String,
	salesStage: String,
	totalRevenue: Number,
	
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: false,
	},
});
const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;
