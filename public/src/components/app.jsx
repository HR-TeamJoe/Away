import React from 'react';
import Calendar from './calendar.jsx';
import TempDropdown from './tempDropdown.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>I would like to go somewhere...</h3>
        <span>
          <span><TempDropdown option={['option 1', 'option 2', 'option 3']}/></span>
          <span>around</span>
          <span><Calendar /></span>
          <form>
            <button >Go!</button>
          </form>
        </span>
      </div>
    )
  }
}

module.exports = App;