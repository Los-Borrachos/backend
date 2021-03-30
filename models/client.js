const mongoose = require('../db/connection');
const ClientSchema = new mongoose.Schema({
	name: String,
	organization: String,
	email: String,
    nextSteps: String,
    salesStage: String,
    totalRevenue: Number
    
});
const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;
