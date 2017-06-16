const tempDefinitions = {
  hot: 90,
  warm: 75,
  crisp: 60,
  cold: 45,
  freezing: 30
}

module.exports.compareCityTemps = (apiResponses, req, res, cities) => {
  var { temp } = req.body;
  var targetTemp = tempDefinitions[temp];

  var results = [];

  apiResponses.forEach((darkSkyResponse) => {
    console.log('The current darkSkyResponse is: ', darkSkyResponse);
    var currentCity = cities.find((city) => city.lat === darkSkyResponse.latitude)
    console.log('Currently iterated city is: ', currentCity)
    var cityTemp = darkSkyResponse.daily.data[0].temperatureMax;
    console.log('cityTemp: ', cityTemp);
    var { latitude, longitude } = darkSkyResponse;
    console.log(`latitude is: ${latitude} and longitude is: ${longitude}.`);
    if ( cityTemp > (targetTemp - 7) && cityTemp < (targetTemp + 8) ) {
      results.push(currentCity);
    }
  });

  console.log('Sending back results: ', results);

  //Implement sort by visits;
  res.status(200).send(results);

};

//DarkSkyAPI takes lat,long,unixTimeStamp.
//This method converts the target date from user
//to the unix timestamp from a year before that date.
module.exports.getYearAgoUnixTime = (date) => {
  console.log('Entering getYearAgoUnixTime, where data is: ', date);
  var subArray = date.substring(0,10).split('-');
  subArray[0] = '' + ( +subArray[0] - 1 ); //Convert year to number, subtract 1, then convert to string
  date = subArray.join('.');
  var targetDate = new Date(date);
  console.log('Year ago date is: ', targetDate);
  var targetUnixTime = targetDate.getTime()/1000|0;
  return targetUnixTime;
}