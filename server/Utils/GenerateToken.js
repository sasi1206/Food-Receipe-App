const jwt = require('jsonwebtoken')

const GenerateToken = (id,email)=>{

    const { REFRESH_TOKEN , ACCESS_TOKEN } = process.env;

    const refresh_token = jwt.sign(
        {
            id,
            email
        },
        REFRESH_TOKEN,
        {
            expiresIn:'7d'
        }
    );

    const access_token = jwt.sign(
        {
            id,
            email
        },
        ACCESS_TOKEN,
        {
            expiresIn:'1h'
        }
    );

    return { refresh_token , access_token }
}

module.exports = { GenerateToken }