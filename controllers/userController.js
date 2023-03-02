const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    try {
        await user.save();
        res.status(200).json({ message: 'user created' });
    } catch (err) {
        res.status(400).json({ message: 'user not created' });
    }
};

module.exports = {
    createUser,
};