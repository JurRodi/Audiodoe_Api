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
      choiceImage1,
      choiceImage2,
      instructionsTitle,
      audio,
      text,
      pageType,
      storyId,
      interaction,
    } = item
    const page = await Page.findOne({
      pageNumber: pageNumber,
      storyId: storyId,
      choicePath: choicePath,
    })
    if (!page) {
      const page = new Page({
        pageNumber,
        backgroundImage,
        backgroundColor,
        animations,
        choicePath,
        choiceSplit,
        choiceQuestion,
        choices,
        choiceImage1,
        choiceImage2,
        instructionsTitle,
        audio,
        text,
        pageType,
        storyId,
        interaction,
      })
      try {
        await page.save()
        res.status(201).json({ message: 'page created' })
      } catch (err) {
        res.status(400).json({ message: 'page not created' })
      }
    }
    try {
      page.pageNumber = pageNumber
      page.backgroundImage = backgroundImage
      page.backgroundColor = backgroundColor
      page.animations = animations
      page.choicePath = choicePath
      page.choiceSplit = choiceSplit
      page.choiceQuestion = choiceQuestion
      page.choices = choices
      page.choiceImage1 = choiceImage1
      page.choiceImage2 = choiceImage2
      page.instructionsTitle = instructionsTitle
      page.audio = audio
      page.text = text
      page.pageType = pageType
      page.storyId = storyId
      page.interaction = interaction
      page.updatedAt = Date.now()
      await page.save()
      res.status(200).json({ message: 'page updated' })
    } catch (err) {
      res.status(400).json({ message: 'page not updated' })
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

const getAll = async (req, res) => {
  const { storyId } = req.params
  try {
    const pages = await Page.find({ storyId: storyId })
    res.status(200).json(pages)
  } catch (error) {
    res.status(400).json({ message: 'pages not found', error: error })
  }
}

module.exports = {
  create,
  getPage,
  getAll,
}
