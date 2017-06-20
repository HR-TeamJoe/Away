var userModel = require('../../..db/models/userModel.js');

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      searchHistory: []
    }
  }

  componentDidMount() {
    axios.get('/api/history')
    .then(response => {
      var displayName = 'Test Name';
      var previousSearches = response.data.history;

      this.setState({
        userName: displayName,
        searchHistory: previousSearches
      });
    }
  }

  render() {
    return (
      <div>
        <h1>`Search History for ${this.state.userName}:`</h1>
        <div>
          {
            searchHistory.map((search, i) => (
              <span>{search.searchTemp}</span>
              <span>{search.searchDate}</span>
              <span>{search.cities.map((city, i) => (city.city))}</span>
            ))
          }
        </div>
    )
  }
}
