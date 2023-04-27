const Story = require('../models/storyModel')
const Page = require('../models/pageModel')

const create = async (req, res) => {
  const { title, thumbnail, discription, pageCount } = req.body
  const story = new Story({ title, thumbnail, discription, pageCount })
  try {
    await story.save()
    res.status(201).json({ message: 'story created' })
  } catch (error) {
    res.status(400).json({ message: 'story not created' })
  }
}

const getAll = async (req, res) => {
  try {
    const stories = await Story.find()
    res.status(200).json(stories)
  } catch (error) {
    res.status(400).json({ message: 'stories not found' })
  }
}

const getById = async (req, res) => {
  const { id } = req.params
  try {
    const story = await Story.findById(id)
    res.status(200).json(story)
  } catch (error) {
    res.status(400).json({ message: 'story not found' })
  }
}

const getPageById = async (req, res) => {
  const { id, pageNumber } = req.params
  try {
    const page = await Page.findOne({ storyId: id, pageNumber: pageNumber })
    res.status(200).json(page)
  } catch (error) {
    res.status(400).json({ message: 'page not found' })
  }
}

module.exports = {
  create,
  getAll,
  getById,
  getPageById,
}
