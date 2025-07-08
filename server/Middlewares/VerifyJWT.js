const jwt = require('jsonwebtoken');
require('dotenv').config();

const VerifyJWT = (req,res,next)=>{
    const access_token = req.cookies.access_token || req.cookies['access_token'];

    if(!access_token){
        return res.status(404).json({
            success:false,
            message:'User not authenticated'
        });
    }else{
        jwt.verify(
            access_token,
            process.env.ACCESS_TOKEN,
            (error,decoded)=>{
                if(error){
                 return res.status(404).json({
                        success:false,
                        message:error.response ? error.response.message : error.message
                    });
                }
                else{
                    req.user = decoded;
                    next();
                }
            }
        );
    }
}

module.exports = VerifyJWT;