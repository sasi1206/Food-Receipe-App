const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ConnectDB = require('./Config/ConnectDB');
require('dotenv').config();

app.use(cors());
app.use(express.json());
ConnectDB;

mongoose.connection.on('connected',()=>{
    app.listen(8000,()=>{
        console.log('Server is running on port 8000');
    })
});
