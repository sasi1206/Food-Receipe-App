const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_DB_URI;

const ConnectDB = async()=>{
    try {
        await mongoose.connect(uri);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB();