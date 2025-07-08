const Blog = require("../Models/Blog");
const Users = require("../Models/User");
const Recipe = require('../Models/Recipe');

const GetUser = async(req,res)=>{
    const { id } = req.user;
    const user = await Users.find({ id:id });
    const Blogs = await Blog.find({ author_id:id });
    const Recipes = await Recipe.find({ author_id:id });
    res.json({
        success:true,
        user:{
            user,
            Blogs,
            Recipes
        }
    });
}

module.exports = GetUser;