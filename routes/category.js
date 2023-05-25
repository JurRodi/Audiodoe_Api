let express = require('express')
let router = express.Router()
const categoryController = require('../controllers/categoryController')
const auth = require('../middleware/auth')

router.post('/create', auth, categoryController.create)
router.get('/', auth, categoryController.getAll)

module.exports = router
