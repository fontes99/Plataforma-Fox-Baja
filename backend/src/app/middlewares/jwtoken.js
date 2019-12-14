let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        if (token.startsWith('Bearer ')) {

            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, 'config.secret', (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    } catch (e) {
        console.error(e)
    }
};

module.exports = {
    checkToken: checkToken
}