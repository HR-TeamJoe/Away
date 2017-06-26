// This creates keys based on whether or not
// the application is running in a deployed setting
const keys = process.env.darkSkyApi ? null : require('./apiKeys.js');

let darkSkyApi;
let googleClientId;
let googleClientSecret;
let googlePlacesApiKey;
let openWeatherApi;
let googleCallbackUrl;
let mapboxKey;
let firebaseKey;

if (process.env.darkSkyApi) {
  darkSkyApi = process.env.darkSkyApi;
  googleClientId = process.env.googleClientId;
  googleClientSecret = process.env.googleClientSecret;
  googlePlacesApiKey = process.env.googlePlacesApiKey;
  openWeatherApi = process.env.openWeatherApi;
  firebaseKey = process.env.firebaseKey;
  googleCallbackUrl = 'https://hr-away.herokuapp.com/auth/google/callback';
  mapboxKey = process.env.mapboxKey;
} else {
  darkSkyApi = keys.darkSkyApi;
  googleClientId = keys.googleClientId;
  googleClientSecret = keys.googleClientSecret;
  googlePlacesApiKey = keys.googlePlacesApiKey;
  openWeatherApi = keys.openWeatherApi;
  googleCallbackUrl = keys.googleCallbackUrl;
  mapboxKey = keys.mapboxKey;
  firebaseKey = keys.firebaseKey;
}

module.exports = {
  googleClientId,
  googleClientSecret,
  googlePlacesApiKey,
  googleCallbackUrl,
  darkSkyApi,
  openWeatherApi,
  mapboxKey,
  firebaseKey
};
