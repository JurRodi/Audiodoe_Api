const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pageSchema = new Schema({
  pageNumber: { type: Number, required: true },
  backgroundImage: { type: String },
  backgroundColor: { type: String },
  animations: [{ filename: { type: String }, position: { type: String } }],
  choicePath: { type: String, required: true },
  choiceSplit: { type: Boolean, required: true },
  choiceQuestion: { type: String },
  choices: { type: Array },
  choiceImage1: { type: String },
  choiceImage2: { type: String },
  instructionsTitle: { type: String },
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
  interaction: {
    type: { type: String, enum: ['Colorize', 'Collect'] },
    backgroundImage: { type: String },
    backgroundColor: { type: String },
    clickable: {
      filename: { type: String },
      amount: { type: Number },
      shape: { type: String },
    },
  },
  audioFileName: { type: String },
  animationFileName: { type: String },
  hasPageNumberChanged: { type: Boolean },
  choiceImage1FileName: { type: String },
  choiceImage2FileName: { type: String },
  startInteraction: { type: String },
  bgImageFileName: { type: String },
  clickableFileName: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Page = mongoose.model('Page', pageSchema)

module.exports = Page
