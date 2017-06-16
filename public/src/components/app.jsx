import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';
import moment from 'moment';


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
    console.log(this.state.startDate, this.state.temp);

    //invoke a method yet to be made that posts to /api/search. that will begin getCityResults process
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
      </div>
    )
  }
}

module.exports = App;
