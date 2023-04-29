require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Account = require('../models/accountModel')
const User = require('../models/userModel')

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
        expiresIn: 86400, // expires in 24 hours
      })
      res.status(200).json({ auth: true, token: token })
    })
  } catch (err) {
    res.status(400).json({ message: 'account not found' })
  }
}

const getUsers = async (req, res) => {
  const { accountId } = req.body
  try {
    const users = await User.find({ accountId: accountId })
    res.status(200).json({ users })
  } catch (err) {
    res.status(400).json({ message: 'account does not exist' })
  }
}

const getAccountById = async (req, res) => {
  const { id } = req.params
  try {
    const account = await Account.findById(id)
    res.status(200).json(account)
  } catch (err) {
    res.status(400).json({ message: 'account not found' })
  }
}

const updateAccount = async (req, res) => {
  const { id, firstname, lastname, email, phone } = req.body
  const user = await Account.findById(id)
  if (!user) return res.status(400).json({ message: 'no account found' })
  try {
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.phone = phone
    user.updatedAt = Date.now()
    await user.save()
    res.status(200).json({ message: 'account updated' })
  } catch (err) {
    res.status(400).json({ message: 'account not updated' })
  }
}

module.exports = {
  createAccount,
  login,
  getUsers,
  getAccountById,
  updateAccount,
}
