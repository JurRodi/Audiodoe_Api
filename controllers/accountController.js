const bcrypt = require('bcryptjs');
const Account = require('../models/accountModel');

const createAccount = async (req, res) => {
    const { firstname, lastname, email, phone, subscriptionType, accountType } = req.body;
    let password = bcrypt.hashSync(req.body.password, 10);
    const account = new Account({ firstname, lastname, email, password, phone, subscriptionType, accountType });
    try {
        await account.save();
        res.status(200).json({ message: 'account created' });
    } catch (err) {
        res.status(400).json({ message: 'account not created' });
    }
};

module.exports = {
    createAccount,
};