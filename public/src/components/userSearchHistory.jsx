import React from 'react';
import axios from 'axios';
import app from './app.jsx';
import UserSearchHistoryEntry from './userSearchHistoryEntry.jsx';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      searchHistory: []
    }
    console.log(this.state.searchHistory.cities);
  }

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
    return (
      <div>
        <button onClick={this.getHistory.bind(this)}>History</button>
        <h1>Search History for {this.state.userName}:</h1>
        <div>
          {
            this.state.searchHistory.map((searchEntry) =>
              <UserSearchHistoryEntry doHistoricalSearch={this.props.doHistoricalSearch} searchEntry={searchEntry} />
            )
          }
        </div>
      </div>
    )
  }
}

module.exports = SearchHistory;
