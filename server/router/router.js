var router = require('express').Router();
var darkSkyBaseUrl = 'https://api.darksky.net/forecast/';
var openWeatherBaseUrl = 'http://samples.openweathermap.org/data/2.5/history/city?';

if ( process.env.darkSkyApi ) {
  var darkSkyKey = require('../darkSkyConfig.js');
  darkSkyBaseUrl += `${darkSkyKey}/`;
}






//Receives temperaturee and date from landing page
//Pull all cities from db
  //Then map city lat/long into an array of promisified function calls
    //Then call promise.all(<array of promises>)
      //Call util.compareweather
router.post('/api/search', (req, res) => {

    //get cities from db.

});


module.exports = router;