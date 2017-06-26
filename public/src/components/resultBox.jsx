import React from 'react';
import axios from 'axios';
import db from '../../../db/config.js';

class DestinationBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visits: this.props.destination.city.visits,
      firebaseKey: ''
    };

    this.incrementVisits = this.incrementVisits.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    axios.get('/config/mapbox')
      .then(results => this.setState({ firebaseKey: results.data }));
  }

  componentDidMount() {
    db.syncState(`cities/${this.props.destination.city.city_id}/visits`, {
      context: this,
      state: 'visits'
    });
  }

  incrementVisits() {
    this.setState({
      visits: this.state.visits + 1
    });
  }

  handleClick(e) {
    console.log('resultBox e: ', e);
    this.incrementVisits();
    this.props.changeCity(e);
  }

  render() {
    const classes = this.props.selectedCity === this.props.destination.city.city ? 'button-clicked' : null;
    return (
      <div>
        <button
          value={this.props.destination.city.city}
          className={classes}
          onClick={this.handleClick}
        >
          {this.props.destination.city.city}
        </button>
      </div>
    );
  }
}

module.exports = DestinationBox;
