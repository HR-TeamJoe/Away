import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; //hardcoded in styles/calendar.css

var Calendar = (props) =>(
    <DatePicker
      selected={props.startDate}
      onChange={props.changeDate}
    />
)

module.exports = Calendar;


// <InfiniteCalendar
//   width={300}
//   height={250}
//   selected={this.state.today}
//   disabledDays={[0,6]}
//   minDate={this.state.lastWeek}
// />
