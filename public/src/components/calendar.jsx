import React from 'react';
import { render } from 'react-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'; //hardcoded in styles/calendar.css

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}


module.exports = Calendar;


// <InfiniteCalendar
//   width={300}
//   height={250}
//   selected={this.state.today}
//   disabledDays={[0,6]}
//   minDate={this.state.lastWeek}
// />