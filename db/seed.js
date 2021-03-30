const clients = require('./clients.json')

const Client = require('../models/client');

Client.deleteMany({})
    .then(() => {
        return Client.insertMany(clients); 
    })
    .catch(console.error)
    .finally(() => {
        process.exit(); 
    })
