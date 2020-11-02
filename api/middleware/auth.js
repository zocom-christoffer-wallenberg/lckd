const jwt = require('jsonwebtoken');
const { getUser } = require('../models/database-functions');
const { refreshToken } = require('../models/token');

module.exports = {
    async user(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const data = jwt.verify(token, 'a1b1c1');
            const user = await getUser(data);
            
            req.token = refreshToken(user);
            req.user = user;
            next();
        } catch (error) {
            res.status(401).send(JSON.stringify({ success: false, error: 'Token not valid' }));
        }
    },
}