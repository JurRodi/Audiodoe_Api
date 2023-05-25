const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pageSchema = new Schema({
  pageNumber: { type: Number, required: true },
  backgroundImage: { type: String },
  backgroundColor: { type: String },
  animations: { type: Array },
  choicePath: { type: String, required: true },
  choiceSplit: { type: Boolean, required: true },
  choiceQuestion: { type: String },
  choices: { type: Array },
  choiceImages: { type: Array },
  audio: { type: String },
  text: { type: String },
  pageType: {
    type: String,
    enum: ['Display', 'Interaction', 'Choice'],
    required: true,
  },
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
