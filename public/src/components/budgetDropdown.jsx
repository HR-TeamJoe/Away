import React from 'react';

var options = ['college student', 'so-so', 'private jet'];

var BudgetDropdown = (props) => (
  <select onChange={props.changeBudget} value={props.budget}>

    {options.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
  </select>

)

export default BudgetDropdown