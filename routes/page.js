let express = require('express')
let router = express.Router()
const pageController = require('../controllers/pageController')
const auth = require('../middleware/auth')

router.post('/create', auth, pageController.create)
router.get('/:storyId/:pageNumber/:choicePath', auth, pageController.getPage)
router.get('/:storyId', auth, pageController.getAll)

module.exports = router
