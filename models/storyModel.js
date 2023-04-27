const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  discription: { type: String, required: true },
  pageCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Story = mongoose.model('Story', storySchema)

module.exports = Story
