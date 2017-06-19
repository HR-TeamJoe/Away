import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

 render () {
  return (
      <div>
        <DestinationsList destinations={props.results}/>
        <MapView destinations={props.results}/>
      </div>
    )
 } 
}

export default Results;