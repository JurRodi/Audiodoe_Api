var express = require('express')
var router = express.Router()
const storyController = require('../controllers/storyController')
const auth = require('../middleware/auth')

router.post('/create', auth, storyController.create)
router.post('/', auth, storyController.getAll)
router.get('/:id', auth, storyController.getById)

module.exports = router
