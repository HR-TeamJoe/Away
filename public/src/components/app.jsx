import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';
import DestinationsList from './resultBoxes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>I would like to go somewhere...</h3>
        <span>
          <span><TempDropdown options={['hot', 'warm', 'crisp', 'cold', 'freezing']}/></span>
          <span>around</span>
          <span><Calendar /></span>
          <form>
            <button >Go!</button>
          </form>
        </span>
        <DestinationsList />
      </div>
    )
  }
}


module.exports = App;
