import React from 'react';

const TempDropdown = props => (
  <select onChange={props.changeTemp} value={props.temp}>
    {
      props.options.map((option, i) => {
        return (
          <option key={i} value={option}>{option}</option>
        );
      })
    }
  </select>
);

export default TempDropdown;
