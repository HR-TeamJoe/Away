import React from 'react';
import DestinationBox from './resultBox.jsx';

var destinations = [
  {city: 'New York'},
  {city: 'Shanghai'},
  {city: 'Taipei'}
];

var DestinationsList = (props) => (
  <div>
    {
      destinations.map((destination, key) => {
        return <DestinationBox key={key} destination={destination} />;
      })
    }
  </div>
);

module.exports = DestinationsList;
