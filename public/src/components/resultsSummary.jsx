import React from 'react';

var ResultsSummary = (props) => (
  <div className="summary">
    <div>You searched for someplace {props.temp} around {props.date.toString().split(' ').slice(0,4).join(' ')}.</div>
    <div>We recommend the following destinations.</div>
  </div>
)

export default ResultsSummary;