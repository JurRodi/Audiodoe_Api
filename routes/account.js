let express = require('express')
let router = express.Router()
const accountController = require('../controllers/accountController')
const auth = require('../middleware/auth')

router.post('/create', accountController.createAccount)
router.post('/login', accountController.login)
router.post('/users', auth, accountController.getUsers)
router.get('/:id', auth, accountController.getAccountById)

module.exports = router
