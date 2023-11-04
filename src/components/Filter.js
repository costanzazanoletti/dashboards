import { useState } from 'react';

const Filter = ({ handleChange }) => {
  const [optionsState, setOptionsState] = useState('');

  const changeEventHandler = (e) => {
    const newValue = e.target.value;
    setOptionsState(newValue);
    handleChange(newValue);
  };

  return (
    <div className="input-group">
      <div className="input-group-text">Filter items</div>
      <select
        className="form-select"
        onChange={changeEventHandler}
        value={optionsState}
      >
        <option value="">All types</option>
        <option value="VISUALIZATION">VISUALIZATION</option>
        <option value="MAP">MAP</option>
        <option value="TEXT">TEXT</option>
        <option value="MESSAGES">MESSAGES</option>
      </select>
    </div>
  );
};
export default Filter;
