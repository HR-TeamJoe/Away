import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';
import BudgetDropdown from './budgetDropdown.jsx';
import SearchButton from './searchButton.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='row center-xs middle-xs search-container'>
          <div className='col-xs-9 search'>
            <form>
              <h3>I would like to go somewhere</h3>
              <div className='row middle-xs center-xs'>
                <TempDropdown options={['hot', 'warm', 'crisp', 'cold', 'freezing']} changeTemp={this.props.changeTemp} temp={this.props.temp}/>
                <h3 >around</h3>
                <Calendar startDate={this.props.startDate} changeDate={this.props.changeDate}/>
                <h3>on a</h3>
                <BudgetDropdown options={['thrifty', 'moderate', 'carefree']} changeBudget={this.props.changeBudget} budget={this.props.budget}/>
                <h3>budget, and I am interested in</h3>
                <input className="interests" type="text" onChange={(e) => this.props.changeInterests(e)} placeholder="anything" />
              </div>
            </form>
            <SearchButton getCityResults={this.props.getCityResults}/>          
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
// <button onClick={(e) => this.props.getCityResults(e)}>Go!</button>
