const express = require('express');
const app = express(); 
const cors = require("cors")


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const usersController = require('./controllers/Users')
app.use("/users/", usersController)
const clientsController = require('./controllers/Client')
app.use("/clients/", clientsController)
const prospectsController = require('./controllers/Prospect');
app.use('/prospects/', prospectsController);

const port = process.env.PORT || 5000

app.listen(port, () => { 
    console.log(`listening on ${port}`)
})