require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Account = require('../models/accountModel')

const createAccount = async (req, res) => {
  const { firstname, lastname, email, phone, subscriptionType, accountType } =
    req.body
  let password = bcrypt.hashSync(req.body.password, 10)
  const account = new Account({
    firstname,
    lastname,
    email,
    password,
    phone,
    subscriptionType,
    accountType,
  })
  try {
    await account.save()
    res.status(200).json({ message: 'account created' })
  } catch (err) {
    res.status(400).json({ message: 'account not created' })
  }
}

const login = async (req, res) => {
  try {
    Account.findOne({ email: req.body.email }, (err, account) => {
      if (!account)
        return res.status(400).json({ message: 'account not found' })
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        account.password
      )
      if (!passwordIsValid)
        return res
          .status(401)
          .json({ message: 'this combination does not match our records' })
      const token = jwt.sign({ id: account._id }, process.env.SECRET, {
        expiresIn: 86400,
      })
      res.status(200).json({ auth: true, token: token })
    })
  } catch (err) {
    res.status(400).json({ message: 'account not found' })
  }
}

module.exports = {
  createAccount,
  login,
}
