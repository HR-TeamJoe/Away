var db =  require('../config.js');

//Try to find a user
//If not found, create it in db.
module.exports.findOrCreate = function(googleProfile) {
  return findUser(googleProfile)
    .then((result) => {
      if ( Object.keys(result).length ) {
        //User match found
        console.log('User found: ', result);
        return result;
      } else {
        //No user found
        console.log('No user found. Creating user with googleProfile: ', googleProfile);
        return addUser(googleProfile);
      }
    })
    .catch((error) => {
      console.log('Error finding user: ', error);
      return error;
    });
};

//Take the key from the user object, this is the firebase 'index' value, basically
  //Fetch the user history and return it
module.exports.getHistory = function(user) {
  console.log('In getHistory, user is: ', user);
  var dbKey = Object.keys(user)[0];
  return db.fetch(`users/${dbKey}/history`, {
    context: this,
    asArray: true
  }).then((data) => {
    console.log('Returning data.history: ', data[0]);
    return data[0];
  }).catch((error) => {
    console.log('Error retrieving history: ', error);
  });
};

//If a user is logged in, fetch that user from the db
  //then set 'history' to that user's history or []
    //Push the current search result (cities only)
      //Update db with new history
module.exports.addToHistory = function(cityData, user, searchTerms) {
  var dbKey = Object.keys(user)[0]; //The firebase hash/key for this user

  db.fetch(`users/${dbKey}`, {context: this})
    .then((user) => {
      var history = user.history ? user.history.history : [];
      var cities = cityData.map((item) => {
        return item.city;
      });
      var historyObj = {
        searchTemp: searchTerms.temp,
        searchDate: searchTerms.startDate,
        cities
      }
      history.push(historyObj);
      return history;
    }).then((historyToSend) => {
      console.log('history to send:', historyToSend);
      return db.post(`users/${dbKey}/history`, {
        data: { history: historyToSend }
      });
    }).then(() => {
        console.log('Updated history');
    }).catch((error) => {
      console.log('Error saving history: ', error);
    });
};

//Find user with user_id matching the googleProfile.id
var findUser = (googleProfile) => {
  return db.fetch('users', {
    context: this,
    asArray: false,
    queries: {
      orderByChild: 'user_id',
      equalTo: googleProfile.id
    }
  });
};

//Add user to database.
//If there is no photo, set the photo url to ''
var addUser = (googleProfile) => {
  var photo = googleProfile.photos[0].value || '';
  var newUser = {
    user_id: googleProfile.id,
    displayName: googleProfile.displayName,
    history: [],
    photo
  };

  return db.push('users', {
    data: newUser
  }).then(newLocation => {
    return newLocation.key;
  }).then((key) => {
    return db.fetch(`users/${key}`);
  }).catch((err) => {
    console.log('Error adding user. Error: ', err);
    res.status(500).send('Error adding user. Error: ', err);
  });
};
