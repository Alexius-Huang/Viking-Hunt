import React from 'react';
import './Checkbox.css';

const Checkbox = ({ checked, children }) => (
  <label className="checkbox-input">
    <input className="checkbox" type="checkbox" />
    <span className="checkbox-display" />
    <span className="checkbox-content">{children}</span>
  </label>
);

export default Checkbox;
