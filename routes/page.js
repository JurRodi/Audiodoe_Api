let express = require('express')
let router = express.Router()
const pageController = require('../controllers/pageController')
const auth = require('../middleware/auth')

router.post('/create', auth, pageController.create)
router.get('/:storyId/:pageNumber', auth, pageController.getPage)

module.exports = router
