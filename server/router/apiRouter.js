var apiRouter = require('express').Router();
var api = require('../searchApi.js');
var User = require('../../db/models/userModel.js');

// Endpoints for /api
apiRouter.post('/search', api.sendSearchResponse);

apiRouter.get('/history', (req, res) => {
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

module.exports = apiRouter;
