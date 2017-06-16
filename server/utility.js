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

module.exports.getYearAgoUnixTime = (date) => {
  console.log('Entering getYearAgoUnixTime, where data is: ', date);
  var arr = date.split('-');
  arr[0] = '' + (+arr[0] - 1 );
  date = arr.join('-');
  var targetDate = new Date(date);
  var targetUnixTime = targetDate.getTime()/1000|0;



  // Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
  // if(!Date.now) Date.now = function() { return new Date(); }
  // Date.time = function() { return Date.now().getUnixTime(); }
  // var parsedUnixTime = new Date(date).getUnixTime();
  console.log('About to return targetUnixTime: ', targetUnixTime);
  return targetUnixTime;
}