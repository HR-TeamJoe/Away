import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';
import MapView from './mapView.jsx';
import moment from 'moment';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      temp: 'warm'
    }

    this.changeTemp = this.changeTemp.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeTemp(e) {
    this.setState({
      temp: e.target.value
    })
  }

  changeDate(date){
    this.setState({
      startDate: date
    })
  }

  getCityResults(e){
    e.preventDefault();
    axios.post('/api/search', {
      startDate: this.state.startDate,
      temp: this.state.temp
    })
      .then((res) => {
        return res
      }).catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div>
        <h3>I would like to go somewhere...</h3>
        <div>
          <span>
            <TempDropdown options={['hot', 'warm', 'crisp', 'cold', 'freezing']} changeTemp={this.changeTemp} temp={this.state.temp}/>
          </span>
          <span>around</span>
          <span>
            <Calendar startDate={this.state.startDate} changeDate={this.changeDate}/>
          </span>
          <form>
            <button onClick={(e) => this.getCityResults(e)}>Go!</button>
          </form>
        </div>
        
        <div>
          <MapView />
        </div>
      </div>
    )
  }
}

module.exports = App;
