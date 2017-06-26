import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';
import ResultsSummary from './resultsSummary.jsx';

const Results = props =>
  (
    <div className="results-container">
      <div className="results">
        <ResultsSummary
          temp={props.temp}
          date={props.date}
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

export default Results;

// <DestinationsList destinations={testArray}/>
// <MapView destinations={testArray}/>
// <ResultTabs destinations={testArray} />
