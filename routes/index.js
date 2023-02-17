var express = require('express');
var router = express.Router();
var aboutCntrl = require("../controllers/about");

/* GET home page. */
router.get('/', aboutCntrl.aboutDescription);
router.get('/editAbout', aboutCntrl.edit);
router.put('/', aboutCntrl.update);

module.exports = router;
