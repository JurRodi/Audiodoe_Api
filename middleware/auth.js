require('dotenv').config();
const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) return res.status(401).json({ message: 'no token provided' });
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ message: 'failed to authenticate' });
        req.userId = decoded.id;
        next();
    });
}

module.exports = authToken;