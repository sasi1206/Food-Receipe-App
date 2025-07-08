const bcrypt = require('bcrypt');
const Users = require('../Models/User');
const { GenerateToken } = require('../Utils/GenerateToken');

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
                
                const { refresh_token , access_token } = GenerateToken(findUser.id,findUser.email);
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

const RegisterController = async (req,res)=>{
    const { username , email , password } = req.body;

    const findUser = await Users.findOne({ username:username , email:email });

    if(findUser === null){
        try {
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new Users({
                id:Math.floor(Math.random()*1E6),
                username,
                email,
                password:hashedPassword
            });
            newUser.save().then(()=>{
                res.status(200).json({
                    success:true,
                    message:'User registered successfully'
                });
            });
        } catch (error) {
            res.status(404).json({
                success:false,
                message:error.response ? error.response.data.message : error.message
            })
        }
    }else{
        return res.status(404).json({
            success:false,
            message:'User already exists'
        });
    }
}

module.exports = { LoginController , RegisterController };