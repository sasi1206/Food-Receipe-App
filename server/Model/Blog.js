const { Schema, model } = require('mongoose');

const BlogSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    blog_title:{
        type:String,
        required:true
    }
})