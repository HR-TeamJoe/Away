var router = require('express').Router();
var util = require('../utility.js');
var User = require('../../db/models/userModel.js');

router.post('/search', util.sendSearchResponse);

router.get('/history', (req, res) => {
  var user = req.session.passport.user;

  User.getHistory(user)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log('Error getting history: ', error);
    })
});

module.exports = router;
