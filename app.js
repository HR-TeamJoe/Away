var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var router = require('./server/router/router.js');
var path = require('path');
var passport = require('passport');
var db = require('./db/models/cityModel.js');
var googleAuthConfig = require('./googleAuthConfig.js');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//CREATE FUNCTION TO SET KEYS
var googleClientId = googleAuthConfig.googleClientId;
var googleClientSecret = googleAuthConfig.googleClientSecret;
var googleCallbackUrl = "http://localhost:1337/auth/google/callback";


//GOOGLE AUTH SETUP****************************
passport.use(new GoogleStrategy({
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: googleCallbackUrl
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      console.log('This is where you would save the user to DB. Profile is: ', profile);
      // return cb(err, user);
      return cb(null, profile);
    // });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//GOOGLE AUTH SETUP****************************

var app = express();

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'tonks', resave: true, saveUninitialized: true }));
app.use((req, res, next) => {
  console.log('SESSION: ', req.session);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

//Route to static files
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
