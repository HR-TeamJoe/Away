var authRouter = require('express').Router();
var passport = require('passport');
var session = require('express-session');

//logs user out
authRouter.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if ( err )  {
      res.sendStatus(500);
      return console.log('Error logging out: ', err);
    }
    console.log('User logged out');
    res.sendStatus(200);
  })
});

//route used by App.jsx to see if user is logged in
authRouter.get('/verify', (req, res) => {
  if ( req.session.passport ) {
    var userSession = req.session.passport.user;
    var userKey = Object.keys(userSession)[0];
    var obj = Object.assign({isLoggedIn: true}, {user:userSession[userKey]});
    res.send(obj)
  } else {
    res.send({isLoggedIn: false});
  }
});

//google oauth route
authRouter.get('/google',
  passport.authenticate('google', { prompt: 'consent', scope: ['profile'] }));

//google oauth callback
authRouter.get('/google/callback', 
  passport.authenticate('google', { prompt: 'consent', failureRedirect: '/', }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = authRouter;