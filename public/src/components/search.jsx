import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <h3>I would like to go somewhere...</h3>
        <div>
          <span>
            <TempDropdown className="temperature" options={['hot', 'warm', 'crisp', 'cold', 'freezing']} changeTemp={this.changeTemp} temp={this.state.temp}/>
          </span>
          <h3>around</h3>
          <span>
            <Calendar startDate={this.state.startDate} changeDate={this.changeDate}/>
          </span>
          <form>
            <button className="searchbutton" onClick={(e) => this.getCityResults(e)}>Go!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;