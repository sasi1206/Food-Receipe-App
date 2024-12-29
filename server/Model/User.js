const { Schema , model } = require('mongoose');

const userSchema = new Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
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
        required:true
    },
    favorite_recipes:[],
    saved_blogs:[],
});

const users = model('users',userSchema);