const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users = require('../Model/User');
require('dotenv').config();

const LoginController = async ( req, res ) =>{
    const { email , password } = req.body;

    const findUser = await Users.findOne({email:email});

    if(findUser === null){
        return res.status(404).json({
            success:false,
            message: "User not found"
        });
    }else{
        try {
            const comparePassword = await bcrypt.compare(password,findUser.password);
            if(comparePassword){
                const refresh_token = jwt.sign({
                    id:findUser.id,
                    email:findUser.email
                },process.env.REFRESH_TOKEN,{
                    expiresIn:'7d'
                });

                const access_token = jwt.sign({
                    id:findUser.id,
                    email:findUser.email
                },process.env.ACCESS_TOKEN,{
                    expiresIn:'1h'
                });

                findUser.refresh_token = refresh_token;
                findUser.save().then(()=>{
                    res.cookie('access_token',access_token,{
                        httpOnly:true,
                        sameSite:'lax',
                        secure:false
                    });
                    res.status(200).json({
                        success:true,
                        message:'User logged in successfully'
                    });
                });
            }
        } catch (error) {
            res.status(404).json({
                success:false,
                message:error.response ? error.response.data.message : error.message
            });
        }
    }
}

module.exports = LoginController;