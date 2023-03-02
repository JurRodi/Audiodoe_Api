const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    password: { type: String, required: true, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ },
    phone: { type: String, required: true, unique: true, match: /^\d{10}$/ },
    subscriptionType: { type: String,
        enum: ['free', 'one', 'three', 'six'],
        default: 'free'
    },
    accountType: { type: String,
        enum: ['parent', 'teacher'],
        default: 'parent'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
