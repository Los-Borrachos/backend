const clients = require('./clients.json')

const Client = require('../models/Client');

Client.deleteMany({})
    .then(() => {
        return Client.insertMany(clients); 
    })
    .catch(console.error)
    .finally(() => {
        process.exit(); 
    })
