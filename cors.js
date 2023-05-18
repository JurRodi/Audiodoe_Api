const whiteList = [
  'http://localhost:4201',
  'http://localhost:4202',
  'https://app.audiodoe.com',
]

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}
