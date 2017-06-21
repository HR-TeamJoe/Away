import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';
import ResultsSummary from './resultsSummary.jsx';



class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <ResultsSummary temp={this.props.temp} date={this.props.date}/>
        <DestinationsList destinations={this.props.results}/>
        <MapView destinations={this.props.results}/>
        <ResultTabs destinations={this.props.results}/>
      </div>
    )
 } 
}

export default Results;

