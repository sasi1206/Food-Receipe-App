const Users = require('../Models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const RefreshAccessToken = async (req,res)=>{
    const { email } = req.params;

    const User = await Users.findOne({email:email});

    if(User === null){
        return res.status(404).json({
            success:false,
            message:"User not found"
        });
    }
    else{
        try {
            jwt.verify(
                User.refresh_token,
                process.env.REFRESH_TOKEN,
                (error,decoded)=>{
                    if(error){
                        return res.status(404).json({
                            success:false,
                            message:error.response ? error.response.data.message : error.message
                        });
                    }
                    else if(decoded.email !== email){
                        return res.status(404).json({
                            success:false,
                            message:"Invalid refresh token"
                        });
                    }
                    else{
                        const refresh_token = jwt.sign(
                            {
                                id:User.id,
                                email:User.email
                            },
                            process.env.REFRESH_TOKEN,
                            {
                                expiresIn:'7d'
                            }
                        );

                        const access_token = jwt.sign(
                            {
                                id:User.id,
                                email:User.email
                            },
                            process.env.ACCESS_TOKEN,
                            {
                                expiresIn:'1h'
                            }
                        );

                        User.refresh_token = refresh_token;
                        User.save().then(()=>{
                            res.cookie('access_token',access_token,{
                                httpOnly:true,
                                sameSite:'strict',
                                secure:true
                            });

                            res.status(200).json({
                                success:true,
                                message:"Refreshing Access Token is success"
                            });
                        });
                    }
                }
            )
        } catch (error) {
            res.status(404).json({
                success:false,
                message:error.response ? error.response.data.message : error.message
            })
        }
    }
}

module.exports = RefreshAccessToken;