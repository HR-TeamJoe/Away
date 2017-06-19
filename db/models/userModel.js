var db =  require('../config.js');

module.exports.findOrCreate = function(user_id, displayName, photo) {
  var user = {
      user_id,
      displayName,
      photo
    };

};

module.exports.getSearches = function() {

}

var findUser = (user_id, displayName, photo, res) => {
  console.log('Entering findUser');
  db.fetch('users', {
    context: this,
    asArray: false,
    queries: {
      orderByChild: 'user_id',
      equalTo: 1
    }
  }).then((data) => {
    console.log('Found data: ', data);
    res.status(200).send(data);
  }).catch((error) => {
    console.error('Error finding user: ', error);
  });

};

var addUser = (user_id, displayName, photo) => {
  var newUser = {
      user_id: user_id,
      displayName: displayName,
      photo: photo
    };
  db.push('users', {
    data: newUser
  }).then(newLocation => {
    // var generatedKey = newLocation.key;
    console.log('newLocation is: ', newLocation);

  }).catch((err) => {
    console.log('Error adding user. Error: ', err);
    res.status(500).send('Error adding user. Error: ', err);
  });
  //available immediately, you don't have to wait for the Promise to resolve
  // var generatedKey = immediatelyAvailableReference.key;
}




module.exports.findUser = findUser;
module.exports.addUser = addUser;





