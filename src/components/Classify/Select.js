import React from 'react';
import { goals } from '../../constants/ticket';
import './style.css';

const Select = ({ onSelect, value }) => {
  return (
    <>
      <p>What's your goal?</p>
      <div className="select-dropdown">
        <select onChange={(e) => onSelect(e)} value={value}>
          <option value="Select">Select</option>
          {goals.map((goal, index) => {
            return (
              <option key={index} value={goal}>
                {goal}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
