var router = require('express').Router();
var util = require('../utility.js');

router.post('/search', util.sendSearchResponse);

module.exports = router;