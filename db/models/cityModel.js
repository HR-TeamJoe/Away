var db =  require('../config.js');

module.exports.addCity = function(city_id, city, lat, long, visits) {
  db.post(`cities/${city_id}`, {
    data: {
      city_id: city_id,
      city: city,
      lat: lat,
      long: long,
      visits: 1
    }
  }).then(() => {
    console.log('city added',201);
  }).catch((err) => {
    throw(err);
    }
  )
}

module.exports.getCity = function() {
  db.fetch('/cities', {
    context: this,
    asArray: true
  }).then(data => {
    console.log(data);
    return data;
  }).catch(error => {
    console.log(error);
  })
}
