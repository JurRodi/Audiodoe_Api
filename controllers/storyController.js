const Story = require('../models/storyModel')

const create = async (req, res) => {
  const {
    title,
    thumbnail,
    backGroundColor,
    description,
    duration,
    ageGroup,
    pageCount,
  } = req.body
  const story = new Story({
    title,
    thumbnail,
    backGroundColor,
    description,
    duration,
    ageGroup,
    pageCount,
  })
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

module.exports = {
  create,
  getAll,
  getById,
}
