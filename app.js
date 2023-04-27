require('dotenv').config()
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

var userRouter = require('./routes/user')
var accountRouter = require('./routes/account')
var storyRouter = require('./routes/story')
var pageRouter = require('./routes/page')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/account', accountRouter)
app.use('/story', storyRouter)
app.use('/page', pageRouter)

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
