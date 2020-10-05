const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');

const PORT = 3030;
require('./models/user')


app.use(express.json());


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',() => {
    console.log("Connected to database!")
})

mongoose.connection.on('error',(err) => {
    console.log("Failed to connect db due to: ",err)
})


app.listen(PORT,() => {
    console.log(`Server is Running on ${PORT}`);
})