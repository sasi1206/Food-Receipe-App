const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ConnectDB = require('./Config/ConnectDB');
require('dotenv').config();

const VerifyJWT = require('./Middleware/VerifyJWT');

app.use(cors());
app.use(express.json());
ConnectDB;

app.post('/register',require('./Controllers/RegisterController'));
app.post('/login',require('./Controllers/LoginController'));
app.get('/refresh_access_token',require('./Controllers/RefreshAccessToken'));
VerifyJWT();

mongoose.connection.on('connected',()=>{
    app.listen(8000,()=>{
        console.log('Server is running on port 8000');
    })
});
