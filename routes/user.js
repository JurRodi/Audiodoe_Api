var express = require('express')
var router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/create', auth, userController.createUser)
router.patch('/update', auth, userController.updateUser)
router.delete('/delete', auth, userController.deleteUser)
router.get('/:id', auth, userController.getById)

module.exports = router
