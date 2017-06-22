import React from 'react';

var options = ['thrifty', 'moderate', 'carefree'];

var BudgetDropdown = (props) => (
  <select onChange={props.changeBudget} value={props.budget}>

    {options.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
  </select>

)

export default BudgetDropdown