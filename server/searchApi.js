const cityModel = require('../db/models/cityModel.js');
const axios = require('axios');
const User = require('../db/models/userModel.js');
const { darkSkyApi, googlePlacesApiKey } = require('./config.js');

const googlePlacesDestinationsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=INTERESTS+in+TARGET&key=${googlePlacesApiKey}`;
const googlePlacesRestaurantsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=BUDGET+restaurants+in+TARGET&key=${googlePlacesApiKey}`;
const googlePlacesHotelsUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=BUDGET+hotels+in+TARGET&key=${googlePlacesApiKey}`;
const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyApi}/`;
const regex = /[^a-zA-Z]+/g;
const tempDefinitions = {
  hot: 90,
  warm: 75,
  crisp: 60,
  cold: 45,
  freezing: 30
};
const budgetDefinitions = {
  'college student': 'cheap',
  'so-so': 'medium+budget',
  'private jet': 'top'
};
let interests;
let budget;


// DarkSkyAPI takes lat,long,unixTimeStamp.
// This method converts the target date from user
// to the unix timestamp from a year before that date.
const getYearAgoUnixTime = (date) => {
  const subArray = date.substring(0, 10).split('-');

  // Convert year to number, subtract 1, then convert to string
  subArray[0] = String(+subArray[0] - 1);
  const reformattedDate = subArray.join('.');
  const targetDate = new Date(reformattedDate);
  const targetUnixTime = targetDate.getTime() / 1000;
  // The below code uses a bitwise that linter doesn't like
  // const targetUnixTime = targetDate.getTime() / 1000 | 0;
  return targetUnixTime;
};

// Get weather data for all cities in DB
// for one year prior to searchd date
// See var getUrl below for darkSkyApi format.
const getDarkSkyData = (req, res) => {
  const { startDate } = req.body;
  // Convert requested startDate to one year earlier.
  // With paid api access we would access several years'
  // weather info and average the results
  const yearAgoUnixTime = getYearAgoUnixTime(startDate);
  let citiesFromDb;
  // Fetch all cities from database
  return cityModel.getCity()
    .then((cities) => {
      citiesFromDb = cities;
      // map array of city lat/long values into an array of get requests wrapped in promises
      const getPromises = cities.map((city) => {
        const { lat, long } = city;
        const getUrl = `${darkSkyUrl}${lat},${long},${yearAgoUnixTime}?exclude=currently,flags`;
        return new Promise((resolve, reject) => {
          axios.get(getUrl)
            .then(results => resolve(results.data))
            .catch(error => reject(error));
        });
      });

      // Call all promise'd get requests
        // then call compareTemps() and pass in the response
      return Promise.all(getPromises)
        .then((apiResponses) => {
          const resultsObj = { apiResponses, req, res, citiesFromDb };
          return resultsObj;
        });
    });
};

// First call to Google Place Web API
// For each city, return a new object with that city object
// and the results of a 'top destinations' search.
const getTourismData = (topCities) => {
  const tourismDataPromises = topCities.map((cityObj) => {
    const cityString = cityObj.city.replace(regex, '+');
    const searchString = googlePlacesDestinationsUrl
                        .replace('TARGET', cityString)
                        .replace('INTERESTS', interests);
    console.log(searchString);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then(results => resolve({ city: cityObj, tourism: results.data }))
        .catch(err => reject(err));
    });
  });
  return Promise.all(tourismDataPromises);
};


// Second call to Google Places Web API
// Extend the tourism data results object on line 127 with
// the results from the 'top hotels' search
const getHotelsData = (arrayOfGoogleData) => {
  const hotelsDataPromises = arrayOfGoogleData.map((cityObj) => {
    const cityString = cityObj.city.city.replace(regex, '+');
    const searchString = googlePlacesHotelsUrl
                        .replace('TARGET', cityString)
                        .replace('BUDGET', budget);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then((results) => {
          const objWithHotels = Object.assign(cityObj, { hotels: results.data });
          resolve(objWithHotels);
        })
        .catch(err => reject(err));
    });
  });
  return Promise.all(hotelsDataPromises);
};

// Second call to Google Places Web API
// Extend the hotels data results object on line 146 with
// the results from the 'top restaurants' search
const getRestaurantsData = (arrayOfGoogleData) => {
  const restaurantsDataPromises = arrayOfGoogleData.map((cityObj) => {
    const cityString = cityObj.city.city.replace(regex, '+');
    const searchString = googlePlacesRestaurantsUrl
                        .replace('TARGET', cityString)
                        .replace('BUDGET', budget);
    return new Promise((resolve, reject) => {
      axios.get(searchString)
        .then((results) => {
          const objWithRestaurants = Object.assign(cityObj, { restaurants: results.data });
          resolve(objWithRestaurants);
        })
        .catch(err => reject(err));
    });
  });
  return Promise.all(restaurantsDataPromises);
};

// For each apiResponse, see if the historical temperature is within
// the -7 and +8 of the user's target temperature. Return only five results,
// sorted by most visits.
const compareCityTemps = (darkSkyResponseObj) => {
  const { req, citiesFromDb, apiResponses } = darkSkyResponseObj;
  const { temp } = req.body;
  const targetTemp = tempDefinitions[temp];

  let results = [];
  apiResponses.forEach((darkSkyResponse) => {
    const currentCity = citiesFromDb.find(city => city.lat === darkSkyResponse.latitude);
    const cityTemp = darkSkyResponse.daily.data[0].temperatureMax;
    if (cityTemp > (targetTemp - 7) && cityTemp < (targetTemp + 8)) {
      results.push(currentCity);
    }
  });

  // Sort results by number of visits, descending.
  results = results.sort((a, b) => a.visits - b.visits);

  const topFiveResults = results.slice(0, 5);
  return topFiveResults;
};

// Calls all three google places methods below
// Returns an array of objects
// Each object contains 1) a city object from the topCities array
// then additional objects for tourism, hotels, restaurants
const getGoogleData = topCities =>
  getTourismData(topCities)
    .then(getHotelsData)
    .then(getRestaurantsData);

// Search request received with terms on req.body: temp, date, budget, interests.
// Parse the search terms into cleaned up variables, then pass to APIs
const sendSearchResponse = (req, res) => {
  console.log('Entering sendSearchResponse where req.body is: ', req.body);

  // Parse out the interests, if any. If none, set interests to 'destinations'
  const encodedInterests = req.body.interests.replace(regex, '+');
  interests = encodedInterests === '' ? 'destinations' : encodedInterests;
  budget = budgetDefinitions[req.body.budget];

  getDarkSkyData(req, res)
    .then(compareCityTemps)
    .then(getGoogleData)
    .then((allCitiesData) => {
      res.status(200).send(allCitiesData);

      // If logged in, save search
      if (req.session.passport) {
        User.addToHistory(allCitiesData, req.session.passport.user, req.body);
      }
    })
    .catch((err) => {
      console.log('Search error: ', err);
      res.sendStatus(500);
    });
};

module.exports.sendSearchResponse = sendSearchResponse;
