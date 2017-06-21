import React from 'react';
import db from '../../../db/config.js';

class DestinationBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visits: this.props.destination.city.visits
    };

    this.incrementVisits = this.incrementVisits.bind(this);
  }

  componentDidMount(){
    db.syncState(`cities/${this.props.destination.city.city_id}/visits`, {
      context: this,
      state: 'visits'
    });
  }

  incrementVisits() {
    var count = ++this.state.visits;
    this.setState({
      visits: count
    });
  }

  render() {
    return (
      <div>
        <button className="destinationButton" onClick={() => this.incrementVisits()}>{this.props.destination.city.city}</button>
      </div>
    )
  }
}

module.exports = DestinationBox;
