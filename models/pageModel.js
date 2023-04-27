const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EPageType = {
  display: 'display',
  animation: 'animation',
  choise: 'choise',
}

const pageSchema = new Schema({
  pageNumber: { type: Number, required: true },
  backgroundImage: { type: String, required: true },
  animationImages: { type: Array },
  audio: { type: String },
  pageType: { type: String, EPageType, default: EPageType.display },
  storyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Page = mongoose.model('Page', pageSchema)

module.exports = Page
