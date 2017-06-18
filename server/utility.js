var cityModel = require('../db/models/cityModel.js'); 
var axios = require('axios');
const darkSkyBaseUrl = 'https://api.darksky.net/forecast/';
const googlePlacesBaseUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=top+destinations+in+TARGET&key=';
const regex = /[^a-zA-Z]+/g;
var darkSkySearchUrl = '';
var googlePlacesSearchUrl = '';

if ( process.env.darkSkyApi ) {
  darkSkySearchUrl = darkSkyBaseUrl + process.env.darkSkyApi;
  googlePlacesSearchUrl = googlePlacesBaseUrl + process.env.googlePlacesApiKey;
} else {
  var darkSkyKey = require('../darkSkyConfig.js');
  var googlePlacesKey = require('../googlePlacesConfig.js');
  darkSkySearchUrl = darkSkyBaseUrl + darkSkyKey;
  googlePlacesSearchUrl = googlePlacesBaseUrl + googlePlacesKey;
}

const tempDefinitions = {
  hot: 90,
  warm: 75,
  crisp: 60,
  cold: 45,
  freezing: 30
};

//Receives desired temperature and date from landing page
//Pull all cities from db
  //Then map city lat/long into an array of promisified get requests
    //Then call promise.all(<array of promises>)
      //Call util.compareTemps with results of all get requests
var sendSearchResponse = (req, res) => {
  console.log('Entering sendSearchResponse where req.body is: ', req.body);

  getDarkSkyData(req, res)
    .then(compareCityTemps)
    .then(getTourismData)
    .then((cityData) => res.status(200).send(cityData))
    .catch((err) => {
      console.log('Search error: ', err);
      res.sendStatus(500);
    });
};

var getDarkSkyData = (req, res) => {
  var { startDate } = req.body;

  //Convert requestd startDate to one year earlier
  //With paid api access we would access several years' 
  //weather info and average the results
  var yearAgoUnixTime = getYearAgoUnixTime(startDate);
  console.log('yearAgoUnixTime is: ', yearAgoUnixTime);

  var citiesFromDb;
  //Fetch all cities from database
  return cityModel.getCity()
    .then((cities) => {
      console.log('Cities from db are: ', cities);
      citiesFromDb = cities;
      //map array of city lat/long values into an array of get requests wrapped in promises
      var getPromises = cities.map((city) => {
        var {lat, long, city} = city;
        console.log(`lat: ${lat} long: ${long} city: ${city}`);
        var getUrl = `${darkSkySearchUrl}/${lat},${long},${yearAgoUnixTime}?exclude=currently,flags`;
        console.log('Creating get request with url: ', getUrl);
        return new Promise((resolve, reject) => {
          axios.get(getUrl)
            .then((results) => resolve(results.data))
            .catch((error) => reject(error));
        });
      });

      console.log('getPromises is: ', getPromises);
      //Call all promise'd get requests
        //then call compareTemps() and pass in the response
      return Promise.all(getPromises)
        .then((apiResponses) => {
          return {apiResponses, req, res, citiesFromDb};
        });
    });
};

//For each apiResponse, see if the historical temperature is within
//the -7 and +8 of the user's target temperature. Return only five results,
//sorted by most visits.
var compareCityTemps = (darkSkyResponseObj) => {

  var {req, res, citiesFromDb, apiResponses} = darkSkyResponseObj;
  var { temp } = req.body;
  var targetTemp = tempDefinitions[temp];

  var results = [];
  apiResponses.forEach((darkSkyResponse) => {
    console.log('The current darkSkyResponse is: ', darkSkyResponse);
    var currentCity = citiesFromDb.find((city) => city.lat === darkSkyResponse.latitude)
    console.log('Currently iterated city is: ', currentCity)
    var cityTemp = darkSkyResponse.daily.data[0].temperatureMax;
    console.log('cityTemp: ', cityTemp);
    var { latitude, longitude } = darkSkyResponse;
    console.log(`latitude is: ${latitude} and longitude is: ${longitude}.`);
    if ( cityTemp > (targetTemp - 7) && cityTemp < (targetTemp + 8) ) {
      results.push(currentCity);
    }
  });

  //Sort results by number of visits, descending.
  results = results.sort(function(a, b) { 
    return a.visits - b.visits;
  });

  var topFiveResults = results.slice(0,5);
  console.log(`Returning top five results: ${topFiveResults[0]}`);
  topFiveResults.forEach((item) => {
    console.log(item);
  })
  return topFiveResults;

};

//Use googlePlacesApi to get tourism data about top cities
var getTourismData = (topCities) => {
  var tourismDataPromises = topCities.map((cityObj) => {
    var cityString = cityObj.city.replace(regex,'+');
    var searchString = googlePlacesSearchUrl.replace('TARGET', cityString);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then((results) => resolve({city: cityObj, googleData: results.data}))
        .catch((err) => reject(err));
    });
  });

  return Promise.all(tourismDataPromises);
    // .then((placesApiReponses) => {
    //   return placesApiReponses.map((apiResponse) => {
    //     console.log('placesResponse: ', apiResponse);
    //   });
    // })
    // .catch((err) => console.log(err));
};

//DarkSkyAPI takes lat,long,unixTimeStamp.
//This method converts the target date from user
//to the unix timestamp from a year before that date.
var getYearAgoUnixTime = (date) => {
  console.log('Entering getYearAgoUnixTime, where data is: ', date);
  var subArray = date.substring(0,10).split('-');
  subArray[0] = '' + ( +subArray[0] - 1 ); //Convert year to number, subtract 1, then convert to string
  date = subArray.join('.');
  var targetDate = new Date(date);
  console.log('Year ago date is: ', targetDate);
  var targetUnixTime = targetDate.getTime()/1000|0;
  return targetUnixTime;
}

module.exports.sendSearchResponse = sendSearchResponse;