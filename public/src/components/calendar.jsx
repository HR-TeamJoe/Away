import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    this.state = {
      today: today,
      lastWeek: lastWeek
    }
  }

  render() {
    return (
      <InfiniteCalendar
        width={300}
        height={250}
        selected={this.state.today}
        disabledDays={[0,6]}
        minDate={this.state.lastWeek}
      />
    )

  }
}


module.exports = Calendar;