const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoute = require('./routes/todoRoute');

//middlewares
app.use(cors());
app.use(express.json());
app.use('/todo', todoRoute);


//connect to db
mongoose.connect('mongodb://localhost/nishant', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('We Are Connected to DB');
});

//listening to server
const port = 8000;
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});