require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const { corsOptions } = require('./cors')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const userRouter = require('./routes/user')
const accountRouter = require('./routes/account')
const storyRouter = require('./routes/story')
const pageRouter = require('./routes/page')
const categoryRouter = require('./routes/category')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/user', userRouter)
app.use('/account', accountRouter)
app.use('/story', storyRouter)
app.use('/page', pageRouter)
app.use('/category', categoryRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // error massage
  res.status(err.status || 500)
  res.json({ message: 'error' })
})

module.exports = app
