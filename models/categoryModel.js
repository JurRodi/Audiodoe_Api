const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true },
  imgPath: { type: String, required: true },
})

const category = mongoose.model('Category', categorySchema)
module.exports = category
