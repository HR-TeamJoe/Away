import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        <DestinationsList destinations={props.results}/>
        <MapView destinations={props.results}/>
        <ResultsTabs destinations={props.results}/>
      </div>
    )
 } 
}

export default Results;