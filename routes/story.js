var express = require('express')
var router = express.Router()
const storyController = require('../controllers/storyController')
const auth = require('../middleware/auth')

router.post('/create', auth, storyController.create)
router.post('/', storyController.getAll)
router.get('/:id', storyController.getById)

module.exports = router
