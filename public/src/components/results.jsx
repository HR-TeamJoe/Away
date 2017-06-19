import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        <DestinationsList destinations={this.props.results}/>
        <MapView destinations={this.props.results}/>
        <ResultTabs destinations={this.props.results}/>
      </div>
    )
 } 
}

export default Results;