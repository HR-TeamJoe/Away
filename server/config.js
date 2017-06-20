//This creates keys based on whether or not
//the application is running in a deployed setting
var darkSkyApi, googleClientId, googleClientSecret, googlePlacesApiKey, openWeatherApi, googleCallbackUrl;

if ( process.env.darkSkyApi ) {
  darkSkyApi = process.env.darkSkyApi;
  googleClientId = process.env.googleClientId;
  googleClientSecret = process.env.googleClientSecret;
  googlePlacesApiKey = process.env.googlePlacesApiKey;
  openWeatherApi = process.env.openWeatherApi;
  googleCallbackUrl = 'https://hr-away.herokuapp.com/auth/google/callback';
} else {
  var keys = require('./apiKeys.js');
  darkSkyApi = keys.darkSkyApi
  googleClientId = keys.googleClientId;
  googleClientSecret = keys.googleClientSecret;
  googlePlacesApiKey = keys.googlePlacesApiKey;
  openWeatherApi = keys.openWeatherApi;
  googleCallbackUrl = keys.googleCallbackUrl;
}

module.exports = {
  googleClientId,
  googleClientSecret,
  googlePlacesApiKey,
  googleCallbackUrl,
  darkSkyApi,
  openWeatherApi
};