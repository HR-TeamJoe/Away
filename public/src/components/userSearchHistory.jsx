import React from 'react';
import axios from 'axios';
import app from './app.jsx';
import UserSearchHistoryEntry from './userSearchHistoryEntry.jsx';
// import _ from 'lodash';
// var _ = require('lodash');
// import { Table } from 'semantic-ui-react';
var { Table } = require('semantic-ui-react');

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      searchHistory: []
      // column: null,
      // direction: null
    }

    console.log(this.state.searchHistory.cities);
  }

  // handleSort(clickedColumn) {
  //   const {column, searchHistory, direction } = this.state
  //
  //   if (column !== clickedColumn) {
  //     this.setState({
  //       column: clickedColumn,
  //       searchHistory: _.sortBy(searchHistory, [clickedColumn]),
  //       direction: 'ascending'
  //     })
  //
  //     return
  //   }
  //
  //   this.setState({
  //     searchHistory: searchHistory.reverse(),
  //     direction: direction === 'ascending' ? 'descending' : 'ascending',
  //   })
  // }

  componentWillMount() {
    this.getHistory();
  }

  getHistory() {
    axios.get('/api/history')
    .then(response => {
      var displayName = 'response.user_id';
      var previousSearches = response.data;

      // console.log('previousSearches:', previousSearches);
      console.log('response:', response);
      console.log('Setting searchHistory to: ', previousSearches)
      this.setState({
        userName: displayName,
        searchHistory: previousSearches,
      });
    });
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Search Temperature</Table.HeaderCell>
            <Table.HeaderCell className="searchDateHeader">Search Date</Table.HeaderCell>
            <Table.HeaderCell>Recommended Cities</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            this.state.searchHistory.map((searchEntry) =>
              <UserSearchHistoryEntry doHistoricalSearch={this.props.doHistoricalSearch} searchEntry={searchEntry} />
            )
          }
        </Table.Body>
      </Table>
    )
  }
}

module.exports = SearchHistory;
