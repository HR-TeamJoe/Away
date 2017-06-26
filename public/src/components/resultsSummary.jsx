import React from 'react';

const ResultsSummary = props => (
  <div className="row center-xs">
    <div className="col-xs-8 summary">
      You searched for someplace <span className="highlight">{props.temp} </span>
      around <span className="highlight">{props.date.toString().split(' ').slice(0, 4).join(' ')}</span><span> </span>
      on a <span className="highlight">{props.budget}</span> budget 
      with an interest in <span className="highlight">{props.interests === '' ? 'everything' : props.interests}</span>.
    </div>
    <div className="col-xs-8 rec">We recommend the following destinations: </div>
  </div>
);

export default ResultsSummary;

// New Search button to link back to home page
// <sup><a href="/"><button id='newSearch'>New Search</button></a></sup>
