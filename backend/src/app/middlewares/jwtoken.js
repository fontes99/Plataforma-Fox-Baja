let jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const secret = process.env.SECRETKEY

let checkToken = (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

        if (token) {
            if (token.startsWith('Bearer ')) { token = token.slice(7, token.length); }
            
            jwt.verify(token, secret, (err, decoded) => {
                
                if (err) {
                    return res.json({ success: false, message: 'Token is not valid' });

                } else {
                    req.decoded = decoded;
                    next();
                }
            });

        } else {
            return res.json({ success: false, message: 'Auth token is not supplied' });
        }
    } catch (e) { console.error(e) }
};

module.exports = { checkToken: checkToken }