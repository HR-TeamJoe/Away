const tempDefinitions = {
  hot: 90,
  warm: 75,
  crisp: 60,
  cold: 45,
  freezing: 30
}

module.exports.compareCityTemps = (apiResponses, req, res) => {
  var { temp } = req.body;
  var targetTemp = tempDefinitions[temp];
  //subtract one year from unix time?


};

module.exports.getYearAgoUnixTime = (date) => {
  var arr = date.split(' ');
  arr[3] = '' + (+arr[3] - 1 );
  date = arr.join(' ');
  var targetDate = new Date(date);
  var targetUnixTime = targetDate.getTime()/1000;



  // Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
  // if(!Date.now) Date.now = function() { return new Date(); }
  // Date.time = function() { return Date.now().getUnixTime(); }
  // var parsedUnixTime = new Date(date).getUnixTime();
  
  return targetUnixTime;
}