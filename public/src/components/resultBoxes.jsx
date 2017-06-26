import React from 'react';
import DestinationBox from './resultBox.jsx';

const DestinationsList = props => (
  <div className="row center-xs">
    {
      props.destinations.map((destination, key) =>
        (
          <DestinationBox
            key={key}
            destination={destination}
            changeCity={props.changeCity}
            selectedCity={props.selectedCity}
          />
        )
      )
    }
  </div>
);

module.exports = DestinationsList;
