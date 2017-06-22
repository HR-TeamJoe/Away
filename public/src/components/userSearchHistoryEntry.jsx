import React from 'react';
import axios from 'axios';

class UserSearchHistoryEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <span>{this.props.searchEntry.searchTemp}</span>
        <span>{this.props.searchEntry.searchDate}</span>
        {this.props.searchEntry.cities.map((city) => <span>{city.city}</span>)}
      </div>
    )
  }
}

module.exports = UserSearchHistoryEntry;
