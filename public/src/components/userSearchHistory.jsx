import React from 'react';
import axios from 'axios';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      searchHistory: []
    }
    console.log(this.state.searchHistory.cities);
  }

  componentDidMount() {

  }

  historyTest() {
    axios.get('/api/history')
    .then(response => {
      var displayName = 'response.user_id';
      var photo = 'response.photo';
      var previousSearches = response.data;

      // console.log('previousSearches:', previousSearches);
      // console.log('response:', response);
      console.log('Setting searchHistory to: ', previousSearches)
      this.setState({
        userName: displayName,
        searchHistory: previousSearches
      });

    });
  }

  render() {
    return (
      <div>
        <button onClick={this.historyTest.bind(this)}>History</button>
        <h1>Search History for {this.state.userName}:</h1>
        <div>
          {
            this.state.searchHistory.map((search, i) =>
              <div>
                <span>{search.searchTemp}</span>
                <span>{search.searchDate}</span>
                {search.cities.map((city) => <span>{city.city}</span>)}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

module.exports = SearchHistory;
