import React from 'react';
import DestinationBox from './resultBox.jsx';

var DestinationsList = (props) => (
  <div className='row center-xs'>
    {
      props.destinations.map((destination, key) => {
        return <DestinationBox key={key} destination={destination} changeCity={props.changeCity} selectedCity={props.selectedCity}/>;
      })
    }
  </div>
);

module.exports = DestinationsList;
