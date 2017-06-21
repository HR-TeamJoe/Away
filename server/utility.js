var cityModel = require('../db/models/cityModel.js');
var axios = require('axios');
var User = require('../db/models/userModel.js');
var { darkSkyApi, googlePlacesApi } = require('./config.js');
const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyApi}/`
const googlePlacesDestinationsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=top+destinations+in+TARGET&key=${googlePlacesApi}`;
const googlePlacesRestaurantsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=top+restaurants+in+TARGET&key=${googlePlacesApi}`;
const googlePlacesHotelsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=top+hotels+in+TARGET&key=${googlePlacesApi}`;
const regex = /[^a-zA-Z]+/g;
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
    .then(getGoogleData)
    .then((allCitiesData) => {
      res.status(200).send(allCitiesData);
      if ( req.session.passport ) { //If logged in, save search
        User.addToHistory(allCitiesData, req.session.passport.user, req.body);
      }
    })
    .catch((err) => {
      console.log('Search error: ', err);
      res.sendStatus(500);
    });
};

var getDarkSkyData = (req, res) => {
  var { startDate } = req.body;

  //Convert requested startDate to one year earlier
  //With paid api access we would access several years'
  //weather info and average the results
  var yearAgoUnixTime = getYearAgoUnixTime(startDate);
  var citiesFromDb;
  //Fetch all cities from database
  return cityModel.getCity()
    .then((cities) => {
      citiesFromDb = cities;
      //map array of city lat/long values into an array of get requests wrapped in promises
      var getPromises = cities.map((city) => {
        var {lat, long, city} = city;
        var getUrl = `${darkSkyUrl}${lat},${long},${yearAgoUnixTime}?exclude=currently,flags`;
        return new Promise((resolve, reject) => {
          axios.get(getUrl)
            .then((results) => resolve(results.data))
            .catch((error) => reject(error));
        });
      });

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
    var currentCity = citiesFromDb.find((city) => city.lat === darkSkyResponse.latitude)
    var cityTemp = darkSkyResponse.daily.data[0].temperatureMax;
    var { latitude, longitude } = darkSkyResponse;
    if ( cityTemp > (targetTemp - 7) && cityTemp < (targetTemp + 8) ) {
      results.push(currentCity);
    }
  });

  //Sort results by number of visits, descending.
  results = results.sort(function(a, b) {
    return a.visits - b.visits;
  });

  var topFiveResults = results.slice(0,5);
  return topFiveResults;

};

//Calls all three google places methods below
//Returns an array of objects
//Each object contains 1) a city object from the topCities array
//then additional objects for tourism, hotels, restaurants
var getGoogleData = (topCities) => {
  return getTourismData(topCities)
    .then(getHotelsData)
    .then(getRestaurantsData);
};

//First call to Google Place Web API
//For each city, return a new object with that city object
//and the results of a 'top destinations' search.
var getTourismData = (topCities) => {
  var tourismDataPromises = topCities.map((cityObj) => {
    var cityString = cityObj.city.replace(regex,'+');
    var searchString = googlePlacesDestinationsUrl.replace('TARGET', cityString);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then((results) => resolve({city: cityObj, tourism: results.data}))
        .catch((err) => reject(err));
    });
  });
  return Promise.all(tourismDataPromises);
};

//Second call to Google Places Web API
//Extend the tourism data results object on line 127 with
//the results from the 'top hotels' search
var getHotelsData = (arrayOfGoogleData) => {
  var hotelsDataPromises = arrayOfGoogleData.map((cityObj) => {
    var cityString = cityObj.city.city.replace(regex,'+');
    var searchString = googlePlacesHotelsUrl.replace('TARGET', cityString);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then((results) => {
          var objWithHotels = Object.assign(cityObj, {hotels: results.data});
          resolve(objWithHotels);
        })
        .catch((err) => reject(err));
    });
  });
  return Promise.all(hotelsDataPromises);
}

//Second call to Google Places Web API
//Extend the hotels data results object on line 146 with
//the results from the 'top restaurants' search
var getRestaurantsData = (arrayOfGoogleData) => {
  var restaurantsDataPromises = arrayOfGoogleData.map((cityObj) => {
    var cityString = cityObj.city.city.replace(regex,'+');
    var searchString = googlePlacesRestaurantsUrl.replace('TARGET', cityString);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then((results) => {
          var objWithRestaurants = Object.assign(cityObj, {restaurants: results.data});
          resolve(objWithRestaurants);
        })
        .catch((err) => reject(err));
    });
  });
  return Promise.all(restaurantsDataPromises);
}

//DarkSkyAPI takes lat,long,unixTimeStamp.
//This method converts the target date from user
//to the unix timestamp from a year before that date.
var getYearAgoUnixTime = (date) => {
  // console.log('Entering getYearAgoUnixTime, where data is: ', date);
  var subArray = date.substring(0,10).split('-');
  subArray[0] = '' + ( +subArray[0] - 1 ); //Convert year to number, subtract 1, then convert to string
  date = subArray.join('.');
  var targetDate = new Date(date);
  // console.log('Year ago date is: ', targetDate);
  var targetUnixTime = targetDate.getTime()/1000|0;
  return targetUnixTime;
}

module.exports.sendSearchResponse = sendSearchResponse;
