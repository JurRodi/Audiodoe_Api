const Category = require('../models/categoryModel')

const create = async (req, res) => {
  req.body.forEach(async (item) => {
    const { name, imgPath } = item
    const category = new Category({
      name,
      imgPath,
    })
    try {
      await category.save()
      res.status(201).json({ message: 'category created' })
    } catch (error) {
      res.status(400).json({ message: 'category not created' })
    }
  })
}

const getAll = async (req, res) => {
  try {
    const category = await Category.find()
    res.status(200).json(category)
  } catch (error) {
    res.status(400).json({ message: 'category not found' })
  }
}

module.exports = {
  create,
  getAll,
}
