import React from 'react';
import Calendar from './calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>I would like to go somewhere...</h3>
        <span>
          <span>*Dropdown*</span>
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