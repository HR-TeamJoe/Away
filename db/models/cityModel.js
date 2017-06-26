const db = require('../config.js');

module.exports.addCity = (cityId, city, lat, long) => {
  db.post(`cities/${cityId}`, {
    data: {
      cityId,
      city,
      lat,
      long,
      visits: 1
    }
  }).then(() => {
    console.log('city added', 201);
  }).catch((err) => {
    throw (err);
  });
};

module.exports.getCity = () =>
  db.fetch('/cities', {
    context: this,
    asArray: true
  }).then((data) => {
    console.log('Inside the getCity then block, data is: ', data);
    return data;
  }).catch((error) => {
    console.log(error);
  });
