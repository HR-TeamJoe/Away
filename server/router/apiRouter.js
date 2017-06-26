const apiRouter = require('express').Router();
const api = require('../searchApi.js');
const User = require('../../db/models/userModel.js');

// Endpoints for /api
apiRouter.post('/search', api.sendSearchResponse);

apiRouter.get('/history', (req, res) => {
  const user = req.session.passport.user;

  User.getHistory(user)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log('Error getting history: ', error);
    });
});

module.exports = apiRouter;
