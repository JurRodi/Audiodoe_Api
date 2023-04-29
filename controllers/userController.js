const User = require('../models/userModel')
const Account = require('../models/accountModel')

const createUser = async (req, res) => {
  const { username, avatar, dateOfBirth, accountId } = req.body
  const user = new User({ username, avatar, dateOfBirth, accountId })
  const account = await Account.findById(accountId)
  if (!account) return res.status(400).json({ message: 'no account found' })
  if (account.userCount >= account.maxUsers)
    return res
      .status(400)
      .json({ message: 'account has reached its user limit.' })
  try {
    await user.save()
    account.userCount++
    account.updatedAt = Date.now()
    await account.save()
    res.status(200).json({ message: 'user created' })
  } catch (err) {
    res.status(400).json({ message: 'user not created' })
  }
}

const updateUser = async (req, res) => {
  const { avatar, userId } = req.body
  const user = await User.findById(userId)
  if (!user) return res.status(400).json({ message: 'no user found' })
  try {
    user.avatar = avatar
    user.updatedAt = Date.now()
    await user.save()
    res.status(200).json({ message: 'user updated' })
  } catch (err) {
    res.status(400).json({ message: 'user not updated' })
  }
}

const deleteUser = async (req, res) => {
  const { userId } = req.body
  try {
    const user = await User.findByIdAndDelete(userId)
    res.status(200).json({ message: 'user deleted' })
  } catch (err) {
    res.status(400).json({ message: 'user not deleted' })
  }
}

const getById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: 'user not found' })
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getById,
}
