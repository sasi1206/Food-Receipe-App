const { Schema , model } = require('mongoose');

const userSchema = new Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile_picture:{
        type:String,
    },
    refresh_token:String
});

const Users = model('users',userSchema);

module.exports = Users;