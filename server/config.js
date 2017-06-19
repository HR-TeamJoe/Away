//This creates keys based on whether or not
//the application is running in a deployed setting
var darkSkyApi, googleClientId, googleClientSecret, googlePlacesApi, openWeatherApi, googleCallbackUrl;

if ( process.env.darkSkyApi ) {
  darkSkyApi = process.env.darkSkyApi;
  googleClientId = process.env.googleClientId;
  googleClientSecret = process.env.googleClientSecret;
  googlePlacesApi = process.env.googlePlacesApi;
  openWeatherApi = process.env.openWeatherApi;
  googleCallbackUrl = 'https://hr-away.herokuapp.com/auth/google/callback';
} else {
  darkSkyApi = '4f5b80ab684573be2cf5563f5f71309c';
  googleClientId = '945753484676-kh15ag8ikibksd1osvqio13tpg9l5pcm.apps.googleusercontent.com';
  googleClientSecret = 'S3e1rG4wja5IEZOVKqE4m45Z';
  googlePlacesApi = 'AIzaSyBpQn_rXT4KufwYeMva4zIJlxCJmvenwqM';
  openWeatherApi = '63669c93468342a734ed4aff1a0e05c4';
  googleCallbackUrl = 'http://localhost:1337/auth/google/callback';
}

module.exports = {
  googleClientId,
  googleClientSecret,
  googlePlacesApi,
  googleCallbackUrl,
  darkSkyApi,
  openWeatherApi
};