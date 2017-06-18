var express = require('express');
var session = require('express-session');
var parser = require('body-parser');
var morgan = require('morgan');
var router = require('./server/router/router.js');
var path = require('path');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var googleAuthConfig = require('./googleAuthConfig.js');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var app = express();


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
      var user = { googleId: profile.googleId };
      return cb(null, user);
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

var db = require('./db/models/cityModel.js');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log('Logging session:', req.session);
  next();
})

app.use(session({secret: 'tonks', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Route to static files
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/api', router);

//GOOGLE AUTH SETUP****************************
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }), //HAVE TO CHANGE THIS
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
//GOOGLE AUTH SETUP****************************


app.set('port', process.env.PORT || 1337);
app.listen(app.get('port'));

module.exports.app = app;
