import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';
import MapView from './mapView.jsx';
import moment from 'moment';
import axios from 'axios';
import DestinationsList from './resultBoxes.jsx';
import Nav from './nav.jsx';
import Search from './search.jsx';
import Results from './results.jsx';
import SearchHistory from './userSearchHistory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      temp: 'warm',
      results: [],
      isLoggedIn: false,
      user: {},
      interests: '',
      budget: 'college student',
      sentSearch: false,
      selectedCity: ''
    }

    console.log(moment());
    console.log('startDate is: ', this.state.startDate);
    this.changeTemp = this.changeTemp.bind(this);
    this.changeDate = this.changeDate.bind(this);
    // this.changeCity = this.changeCity.bind(this);
  }

  componentWillMount() {
    axios.get('/auth/verify')
      .then((res) => {
        if ( res.data.isLoggedIn ) {
          this.setState({
            isLoggedIn: res.data.isLoggedIn,
            user: res.data.user
          });
        } else {
          this.setState({isLoggedIn: false});
        }

        console.log('Logged in: ', this.state.isLoggedIn);
        console.log('User is: ', this.state.user);
      });
  }

  changeBudget(e) {
    console.log(e.target.value);
    this.setState({
      budget: e.target.value
    });
    setTimeout(() => {
      console.log('budget is now: ', this.state.budget);
    }, 1000)
  }

  changeTemp(e) {
    console.log(e.target.value);
    this.setState({
      temp: e.target.value
    });
    setTimeout(() => {
      console.log('temp is now: ', this.state.temp);
    }, 1000)
  }

  changeDate(date) {
    console.log('new date: ',date);
    this.setState({
      startDate: date
    });
  }

  changeInterests(e) {
    console.log(e.target.value);
    this.setState({
      interests: e.target.value
    });
  }
  
  changeCity(city) {
    console.log('new city is: ', city.target.value)
    this.setState({
      selectedCity: city.target.value
    })
  }

  getCityResults(e) {
    console.log('Searching...');
    e.preventDefault();
    console.log(this.state.interests);
    axios.post('/api/search', {
      startDate: this.state.startDate,
      temp: this.state.temp,
      interests: this.state.interests,
      budget: this.state.budget
    })
      .then((res) => {
        this.setState({
          sentSearch: true,
          results: res.data
        })
        console.log('Data received: ', JSON.stringify(res.data));
        return res.data
      }).catch((err) => {
        throw err;
      });
  }

  showResultsPage() {
    this.setState({'sentSearch': !this.state.sentSearch});
  }

  logout(e) {
    axios.post('/auth/logout');
  }

  render() {
    var Page = null;
    if ( !this.state.sentSearch ) {
      Page = <Search budget={this.state.budget} changeBudget={this.changeBudget.bind(this)} changeInterests={this.changeInterests.bind(this)} getCityResults={this.getCityResults.bind(this)} startDate={this.state.startDate} changeDate={this.changeDate} changeTemp={this.changeTemp.bind(this)} temp={this.state.temp}/>;
    } else if ( this.state.sentSearch ) {
      Page = <Results temp={this.state.temp} date={this.state.startDate} budget={this.state.budget} interests={this.state.interests} results={this.state.results} changeCity={this.changeCity.bind(this)} selectedCity={this.state.selectedCity}/>;
    }

    return (
      <div>
        <Nav user={this.state.user} isLoggedIn={this.state.isLoggedIn}/>
        {Page}
      </div>
    )
  }
}

module.exports = App;
