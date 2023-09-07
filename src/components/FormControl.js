// FormControl.js
import React, { useState } from 'react';

const FormControl = ({ label, validation, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
      {validation(value) && <span>{validation(value)}</span>}
    </div>
  );
};

export default FormControl;
