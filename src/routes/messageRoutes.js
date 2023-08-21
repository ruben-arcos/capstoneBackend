let express = require('express');
let router = express.Router();
let controller = require('../controllers/messageController');

// anyone can get to this route
router.get('/hello', controller.hello)


// private hello - someone with a valid token can access this route

router.get('/privateHello', controller.privateHello)

module.exports = router;