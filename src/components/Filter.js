import { useState } from 'react';
const Filter = ({ changeSelectedFunction }) => {
  const [optionsState, setOptionsState] = useState('');
  const changeEventHandler = (newValue) => {
    setOptionsState(newValue);
    changeSelectedFunction(newValue);
  };

  return (
    <div className="input-group">
      <div className="input-group-text">Filter items</div>
      <select
        className="form-select"
        onChange={(e) => {
          changeEventHandler(e.target.value);
        }}
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
