const jwt = require('jsonwebtoken');
const otp = require('otp-generator');
const Users = require('../Models/User');

const Generate_OTP = async(req,res)=>{
    const { phoneNumber , shopId } = req.body; 
    try{
        const findUser = await Users.findOne({ phoneNumber:phoneNumber, shopId:shopId }).exec();
        if(findUser === null){
            return res.status(401).json({
                success:false,
                message:"User not found"
            })
        }else{
            const otp_code = otp.generate(6,{ upperCaseAlphabets: false , specialChars: false , lowerCaseAlphabets: false , digits: true });
    
            const token = jwt.sign(
                {
                    otp:otp_code
                },
                process.env.OTP_ACCESS_TOKEN,
                {
                    expiresIn: '5m'
                }
            );

            res.cookie('otp_token',token,{
                httpOnly:true,
                sameSite:'lax',
                secure:false
            });
    
            return res.status(200).json({
                success:true,
                message:"OTP sent successfully",
                otp:otp_code
            });
        }
    }catch(error){
        return res.status(404).json({
            success:false,
            message: error.response ? error.response.data : error.message
        })
    }
}

const Verify_OTP = async (req,res)=>{
    const token = req.cookies.otp_token || req.cookies['otp_token'];
    if(!token) return res.status(401).json({ success:false, message:"No token found" });
    const { otp } = req.body;
    try{
        const decoded = jwt.verify(token,process.env.OTP_ACCESS_TOKEN);
        if(decoded.otp === otp){
            return res.json({
                success:true,
                message:"OTP Verified successfully"
            })
        }else{
            return res.status(404).json({
                success:false,
                message:"Invalid OTP"
            })
        }
    }catch(error){
        return res.status(404).json({
            success:false,
            message: error.response ? error.response.data : error.message
        });
    }
}

module.exports = { Generate_OTP , Verify_OTP }