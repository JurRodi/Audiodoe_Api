const Page = require('../models/pageModel')

const create = async (req, res) => {
  req.body.forEach(async (item) => {
    const {
      pageNumber,
      backgroundImage,
      backgroundColor,
      animations,
      choicePath,
      choiceSplit,
      choiceQuestion,
      choices,
      choiceImages,
      instructionsTitle,
      audio,
      text,
      pageType,
      storyId,
    } = item
    const page = new Page({
      pageNumber,
      backgroundImage,
      backgroundColor,
      animations,
      choicePath,
      choiceSplit,
      choiceQuestion,
      choices,
      choiceImages,
      instructionsTitle,
      audio,
      text,
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

const getPage = async (req, res) => {
  const { storyId, pageNumber, choicePath } = req.params
  try {
    const page = await Page.findOne({
      storyId: storyId,
      pageNumber: pageNumber,
      choicePath: choicePath,
    })
    res.status(200).json(page)
  } catch (error) {
    res.status(400).json({ message: 'page not found' })
  }
}

module.exports = {
  create,
  getPage,
}
