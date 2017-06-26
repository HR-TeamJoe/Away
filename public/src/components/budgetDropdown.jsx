import React from 'react';

const options = ['college student', 'so-so', 'private jet'];

const BudgetDropdown = props => (
  <select onChange={props.changeBudget} value={props.budget}>
    {options.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
  </select>
);

export default BudgetDropdown;
