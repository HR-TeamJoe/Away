var db =  require('../config.js');

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

module.exports.getHistory = function(user) {
  console.log('In getHistory, user is: ', user);
  var dbKey = Object.keys(user)[0];
  return db.fetch(`users/${dbKey}/history`, {
    context: this,
    asArray: true
  }).then((data) => {
    return data.history;
  }).catch((error) => {
    console.log('Error retrieving history: ', error);
  });
};

//If a user is logged in, fetch that user from the db
  //then set 'history' to that user's history or []
    //Push the current search result (cities only)
      //Update db with new history
module.exports.addToHistory = function(cityData, user) {
  var dbKey = Object.keys(user)[0]; //The firebase hash/key for this user
  
  db.fetch(`users/${dbKey}`, {context: this})
    .then((user) => {
      var history = user.history.history || [];
      var cities = cityData.map((item) => {
        return item.city;
      });
      history.push(cities);
      return history;
    }).then((historyToSend) => {
      return db.post(`users/${dbKey}/history`, {
        data: { history: historyToSend }
      });     
    }).then(() => {
        console.log('Updated history');
    }).catch((error) => {
      console.log('Error saving history: ', error);
    });
};

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





