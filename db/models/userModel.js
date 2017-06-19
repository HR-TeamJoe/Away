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

module.exports.getHistory = function() {

}

module.exports.addToHistory = function(search) {

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





