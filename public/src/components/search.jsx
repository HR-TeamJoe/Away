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
      <div className='row center-xs middle-xs search-container'>
        <div className='col xs-8 search'>
          <form>
            <h3>I would like to go somewhere</h3>
            <div className='row middle-xs center-xs'>
              <TempDropdown className='col-xs-3' options={['hot', 'warm', 'crisp', 'cold', 'freezing']} changeTemp={this.props.changeTemp} temp={this.props.temp}/>
              <h3 className='col-xs-3'>around</h3>
              <Calendar startDate={this.props.startDate} changeDate={this.props.changeDate}/>
            </div>
            
            <button onClick={(e) => this.props.getCityResults(e)}>Go!</button>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default Search;

