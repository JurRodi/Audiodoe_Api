var express = require('express')
var router = express.Router()
const storyController = require('../controllers/storyController')
const auth = require('../middleware/auth')

router.post('/create', auth, storyController.create)
router.post('/', storyController.getAll)

module.exports = router
