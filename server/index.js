require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const ConnectDB = require('./Config/ConnectDB');
const VerifyJWT = require('./Middlewares/VerifyJWT');
const { LoginController , RegisterController } = require('./Controllers/Auth');

app.use(cors({
    origin : 'http://localhost:5173',
    optionSuccessStatus: 200,
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE"]
}));

app.use(express.json());
app.use(cookieParser());
ConnectDB;

app.post('/register',RegisterController);
app.post('/login',LoginController);
app.get('/refresh_access_token',require('./Controllers/RefreshAccessToken'));
app.get('/get_user',VerifyJWT,require('./Controllers/GetUser'));

mongoose.connection.on('connected',()=>{
    app.listen(8000,()=>{
        console.log('Server is running on port 8000');
    })
});
