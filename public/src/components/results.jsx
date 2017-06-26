import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';
import ResultsSummary from './resultsSummary.jsx';
import moment from 'moment';

const Results = (props) => {
  let dateForFlight;

  if (typeof props.date === 'function') {
    dateForFlight = props.date;
  } else {
    dateForFlight = moment(props.date);
  }

  return (
    <div className="results-container">
      <div className="results">
        <ResultsSummary
          temp={props.temp}
          date={dateForFlight}
          budget={props.budget}
          interests={props.interests}
        />
        <DestinationsList
          destinations={props.results}
          changeCity={props.changeCity}
          selectedCity={props.selectedCity}
        />
        <MapView destinations={props.results}/>
        <ResultTabs
          startDate={props.date}
          destinations={props.results}
          changeCity={props.changeCity}
          selectedCity={props.selectedCity}
        />
      </div>
    </div>
  );
};

export default Results;
