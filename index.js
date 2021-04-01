const express = require('express');
const app = express(); 
const cors = require("cors")
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const usersController = require('./controllers/Users')
app.use("/users/", usersController)
const clientsController = require('./controllers/Client')
app.use("/clients/", clientsController)
const prospectsController = require('./controllers/Prospect');
app.use('/prospects/', prospectsController);

// The last middleware receives any error as its first argument
// app.use((err, req, res, next) => {
//   // If the error contains a statusCode, set the variable to that code
//   // if not, set it to a default 500 code
//   const statusCode = err.statusCode || 500;
//   // If the error contains a message, set the variable to that message
//   // if not, set it to a generic 'Internal Server Error'
//   const message = err.message || 'Internal Server Error';
//   // Set the status and send the message as a response to the client
//   res.status(statusCode).send(message);
// });
app.use(handleValidationErrors);

app.use(handleErrors);

const port = process.env.PORT || 5000

app.listen(port, () => { 
    console.log(`listening on ${port}`)
})