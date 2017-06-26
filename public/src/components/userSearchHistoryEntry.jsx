import React from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

class UserSearchHistoryEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedCities = this.props.searchEntry.cities.map((city) => city.city);
    var formattedCities = mappedCities.join(' / ');

    return (
        <Table.Row className="userSearchHistoryEntry-row" onClick={(e) => this.props.doHistoricalSearch(e, this.props.searchEntry)}>
          <Table.Cell className="searchTemp">{this.props.searchEntry.searchTemp}</Table.Cell>
          <Table.Cell className="searchDate">{this.props.searchEntry.searchDate}</Table.Cell>
          <Table.Cell className="formattedCities">{formattedCities}</Table.Cell>
        </Table.Row>
    )
  }
}

module.exports = UserSearchHistoryEntry;
