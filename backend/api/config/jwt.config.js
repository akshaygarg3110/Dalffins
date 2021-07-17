//Author: Divyashree Bangalore Subbaraya (B00875916)
const jwt = require('jsonwebtoken');

const tokenSecret = require('../config/token.config');

module.exports.jwtAuthenticate = (request, response, next) => {
    const authorizationHeader = request.headers['authorization']
    var accessToken = authorizationHeader && authorizationHeader.split(' ')[1]

    if ("authorization" in request.headers)
         accessToken = request.headers["authorization"].split(" ")[1];

    if (accessToken == null) {
        return (
            response.status(401).json({
                success: 'false',
                message: 'Token undefined!'
            })
        )
    }
    else {
        jwt.verify(accessToken, tokenSecret.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {

                return (
                    response.status(403).json({
                        success: 'false',
                        message: 'No access provided for the user, authentication failed!'
                    })
                )
            }
            else {
                request._id = user._id;
                next();
            }
        });
    };
};