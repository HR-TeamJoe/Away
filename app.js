const express = require('express');
const expressSession = require('express-session')({ secret: 'tonks', resave: true, saveUninitialized: true });
const parser = require('body-parser');
const parserEncoded = require('body-parser').urlencoded({ extended: true });
const cookieParser = require('cookie-parser')();
const morgan = require('morgan')('combined');
const apiRouter = require('./server/router/apiRouter.js');
const authRouter = require('./server/router/authRouter.js');
const configRouter = require('./server/router/configRouter.js');
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientId, googleClientSecret, googleCallbackUrl } = require('./server/config.js');
const User = require('./db/models/userModel.js');

// Google oauth setup
passport.use(new GoogleStrategy({
  clientID: googleClientId,
  clientSecret: googleClientSecret,
  callbackURL: googleCallbackUrl
},
  (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate(profile)
      .then(result => cb(null, result))
      .catch(error => cb(error, null));
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
// End of google oauth setup

const app = express();

// MIDDLEWARE
app.use(morgan);
app.use(cookieParser);
app.use(parserEncoded);
app.use(parser.json());
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  if (req.session.passport) {
    console.log(req.session.passport.user);
    console.log('User is Logged In');
  }
  next();
});

// ROUTING
app.use(express.static(path.resolve(__dirname, './public')));
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/config', configRouter);

// INIT
app.set('port', process.env.PORT || 1337);
app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('Error starting server: ', err);
  }
  return console.log('\x1b[36m', 'AWAY: Listening on port: ', app.get('port'));
});

module.exports.app = app;
