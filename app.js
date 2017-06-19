var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var router = require('./server/router/router.js');
var path = require('path');
var passport = require('passport');
var db = require('./db/models/cityModel.js');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var { googleClientId, googleClientSecret, googleCallbackUrl } = require('./server/config.js');
var User = require('./db/models/userModel.js');

//Google oauth setup
passport.use(new GoogleStrategy({
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: googleCallbackUrl
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate(profile)
      .then((result) => {
        console.log('In the findOrCreate then block, result is: ', result);
        return cb(null, result);
      })
      .catch((error) => {
        return cb(error, null);
      });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
//End of google oauth setup

var app = express();

//MIDDLEWARE
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(parser.json());
app.use(require('express-session')({ secret: 'tonks', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  if ( req.session.passport ) {
    console.log('req.session.passport.user is: ', req.session.passport.user)
    console.log('KEY: ', Object.keys(req.session.passport.user)[0]); 
  }
  next();
});

//ROUTING
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/api', router);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }), //HAVE TO CHANGE THIS REDIRECT URL
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.set('port', process.env.PORT || 1337);
app.listen(app.get('port'));

module.exports.app = app;