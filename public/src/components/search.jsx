import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>I would like to go somewhere...</h3>
        <div>
          <span>
            <TempDropdown className="temperature" options={['hot', 'warm', 'crisp', 'cold', 'freezing']} changeTemp={this.props.changeTemp} temp={this.props.temp}/>
          </span>        
          <h3>around</h3>          
          <span>
            <Calendar startDate={this.props.startDate} changeDate={this.props.changeDate}/>
          </span>
          <form>
            <button className="searchbutton" onClick={(e) => this.props.getCityResults(e)}>Go!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;

