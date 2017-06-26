import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';
import BudgetDropdown from './budgetDropdown.jsx';
import SearchButton from './searchButton.jsx';

const Search = props => (
  <div>
    <div className="row center-xs middle-xs search-container">
      <div className="col-xs-9 search">
        <form>
          <h3>I would like to go somewhere</h3>
          <div className="row middle-xs center-xs">
            <TempDropdown options={['hot', 'warm', 'crisp', 'cold', 'freezing']} changeTemp={props.changeTemp} temp={props.temp}/>
            <h3 >around</h3>
            <Calendar startDate={props.startDate} changeDate={props.changeDate}/>
            <h3>on a</h3>
            <BudgetDropdown options={['thrifty', 'moderate', 'carefree']} changeBudget={props.changeBudget} budget={props.budget}/>
            <h3>budget, and I am interested in</h3>
            <input
              className="interests"
              type="text"
              onChange={e => props.changeInterests(e)}
              placeholder="anything"
            />
            <h3>.</h3>
          </div>
        </form>
        <SearchButton getCityResults={props.getCityResults} />
      </div>
    </div>
  </div>
);

export default Search;
