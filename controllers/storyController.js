const Story = require('../models/storyModel')

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

module.exports = {
  create,
  getAll,
}
