import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';
import ResultsSummary from './resultsSummary.jsx';
import moment from 'moment';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var dateForFlight;
    if ( typeof this.props.date === 'function') {
      dateForFlight = this.props.date;
    } else {
      dateForFlight = moment(this.props.date);
    }

    return (
    <div className="results-container">
      <div className="results">
        <ResultsSummary temp={this.props.temp} date={dateForFlight} budget={this.props.budget} interests={this.props.interests}/>
        <DestinationsList destinations={this.props.results} changeCity={this.props.changeCity} selectedCity={this.props.selectedCity}/>
        <MapView destinations={this.props.results}/>
        <ResultTabs startDate={this.props.date} destinations={this.props.results} changeCity={this.props.changeCity} selectedCity={this.props.selectedCity}/>
      </div>
    </div>
    )
 }
}

export default Results;

// <DestinationsList destinations={testArray}/>
// <MapView destinations={testArray}/>
// <ResultTabs destinations={testArray}/>
