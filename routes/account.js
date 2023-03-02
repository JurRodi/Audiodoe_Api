let express = require('express');
let router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/create', accountController.createAccount);
router.post('/login', accountController.login);

module.exports = router;
