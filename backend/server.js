//Back-end Web framework
const express = require('express');
//envioment variables
const dotenv = require('dotenv').config();
//Envioment variable, if don't work -> go to 5000
const port = process.env.PORT || 5000;

const {errorHandler} = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//If dev searches this get on the browser. it wil return what is inside of it. 
//Note: it will gointo the routes folder and go into the goalRoutes.js
//Here it will find what it needs to return
app.use('/api/goals', require('./routes/goalRoutes'));

//Will overite the default express errorHandler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))



console.log("Hi Mom");