const Page = require('../models/pageModel')

const create = async (req, res) => {
  req.body.forEach(async (item) => {
    const {
      pageNumber,
      backgroundImage,
      animationImages,
      audio,
      pageType,
      storyId,
    } = item
    const page = new Page({
      pageNumber,
      backgroundImage,
      animationImages,
      audio,
      pageType,
      storyId,
    })
    try {
      await page.save()
      res.status(201).json({ message: 'pages created' })
    } catch (error) {
      res.status(400).json({ message: 'pages not created' })
    }
  })
}

module.exports = {
  create,
}
