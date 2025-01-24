const Users = require('../Model/User');
const bcrypt = require('bcrypt');

const RegisterController = async (req,res)=>{
    const { first_name , last_name , email , password } = req.body;

    const findUser = await Users.findOne({email:email});

    if(findUser === null){
        try {
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new Users({
                id:Math.floor(Math.random()*1E6),
                first_name:first_name,
                last_name:last_name,
                email:email,
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

module.exports = RegisterController;