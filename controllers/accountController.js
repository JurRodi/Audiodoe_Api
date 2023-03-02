const Account = require('../models/accountModel');

const createAccount = async (req, res) => {
    const { firstname, lastname, email, password, phone, subscriptionType, accountType } = req.body;
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