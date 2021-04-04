const mongoose = require('../db/connection');
const ProspectSchema = new mongoose.Schema({
	name: String,
	organization: String,
	email: String,
	phoneNumber: String,
	nextSteps: String,
	salesStage: String,
	totalRevenue: Number,
});
const Prospect = mongoose.model('Prospect', ProspectSchema);
module.exports = Prospect;
