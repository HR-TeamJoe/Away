import React from 'react';

var ResultsSummary = (props) => (
  <div className="summary">
    <span>You searched for someplace {props.temp} around {props.date.toString().split(' ').slice(0,4).join(' ')}.</span>
  </div>
)

export default ResultsSummary;