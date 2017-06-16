var router = require('express').Router();
var axios = require('axios');
var util = require('../utility.js');
var cityModel = require('../../db/models/cityModel.js'); 
var darkSkyBaseUrl = 'https://api.darksky.net/forecast/';
var openWeatherBaseUrl = 'http://samples.openweathermap.org/data/2.5/history/city?';

if ( process.env.darkSkyApi ) {
  var darkSkyKey = process.env.darkSkyApi;
  darkSkyBaseUrl += `${darkSkyKey}/`;
} else {
  var darkSkyKey = require('../../darkSkyConfig.js');
  darkSkyBaseUrl += `${darkSkyKey}/`;
}

//Receives temperaturee and date from landing page
//Pull all cities from db
  //Then map city lat/long into an array of promisified function calls
    //Then call promise.all(<array of promises>)
      //Call util.compareTemps
router.post('/api/search', (req, res) => {
  var { date } = req.body;

  //Convert requestd date to one year earlier
  //With paid api access we would access several years and average
  var yearAgoUnixTime = util.getYearAgoUnixTime(date);

  //Fetch all cities from databse
  cityModel.getCity()
    .then((cities) => {

      //map array of city lat/long values into an array of get requests wrapped in promises
      var getPromises = cities.map((city) => {
        return new Promise((resolve, reject) => {
          var {lat, long, city} = city;
          var getUrl = `${darkSkyBaseUrl}${lat},${long},${yearAgoUnixTime}?exclude=currently,flags`;
          axios.get(getUrl)
            .then((results) => resolve(results.data))
            .catch((error) => reject(error));
        });
      });

      //Call all promise'd get requests
        //then call compareTemps() and pass in the response
      Promise.all(getPromises)
        .then((apiResponses) => {
          util.compareTemps((apiResponses, req, res));
        });
      

    });
//https://api.darksky.net/forecast/{{darkSkyApi}}/22.3574372,113.8408204,1465948800?exclude=currently,flags
});


module.exports = router;