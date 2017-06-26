// Handle endpoints for /config in this file

const configRouter = require('express').Router();
const keys = require('../config.js');

configRouter.get('/db', (req, res) => {
  res.status(200).send(keys.firebaseKey);
});

// Not currently used due to syncState issue
// that is noted in resultBox.jsx
configRouter.get('/mapbox', (req, res) => {
  res.status(200).send(keys.mapboxKey);
});

module.exports = configRouter;
