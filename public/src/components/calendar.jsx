import React from 'react';
import DatePicker from 'react-datepicker';

const Calendar = props => (
  <DatePicker
    selected={props.startDate}
    onChange={props.changeDate}
  />
);

module.exports = Calendar;
