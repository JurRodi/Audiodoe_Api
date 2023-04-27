const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EAgeGroup = {
  age4to6: 'age4to6',
  age6to8: 'age6to8',
  age8to10: 'age8to10',
}

const storySchema = new Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  discription: { type: String, required: true },
  duration: { type: String, required: true },
  ageGroup: { type: String, EAgeGroup, required: true },
  pageCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Story = mongoose.model('Story', storySchema)

module.exports = Story
