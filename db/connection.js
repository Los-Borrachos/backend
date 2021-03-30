const mongoose = require('mongoose')

mongoose.Promise = Promise
const dbuser = 'primary-user';
const password = 'gmpgRLHOOEOakJLF';
const dbName = 'hound'
const mongoURI = `mongodb+srv://${dbuser}:${password}@cluster0.xr8bv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})

module.exports = mongoose