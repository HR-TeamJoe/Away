import React from 'react';
import moment from 'moment';

const base = 'https://www.kayak.com/flights/NYC-DESTINATION/DEPART/RETURN';

const buildUrl = (props) => {
  let dateForFlight;
  if (typeof props.startDate === 'function') {
    dateForFlight = props.startDate;
  } else {
    dateForFlight = moment(props.startDate);
  }

  const departDate = dateForFlight.format('YYYY-MM-DD');
  const returnDate = dateForFlight.add(7, 'days').format('YYYY-MM-DD');
  dateForFlight.subtract(7, 'days');
  return base.replace('DESTINATION', props.destination.city.airport)
              .replace('DEPART', departDate)
              .replace('RETURN', returnDate);
};

const BookFlight = props => (
  <span>
    <a href={buildUrl(props)}>
      <button className="book-flight">Book A Flight</button>
    </a>
  </span>
);

export default BookFlight;

// https://www.kayak.com/flights/NYC-SFO/2017-06-23/2017-06-30
// https://www.google.com/flights/#search;f=JFK,EWR,LGA;t=SFO;d=DEPART;r=RETURN

// original
// https://www.google.com/flights/#search;f=JFK,EWR,LGA;t=SFO;d=2017-07-09;r=2017-07-12
