var express = require('express');
var router = express.Router();
var controller = require('../controllers/home');

/* GET home page. */
router.get('/', controller.index)

module.exports = router;


