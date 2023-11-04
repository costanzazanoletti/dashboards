import { useContext } from 'react';
import { TypeContext } from '../App';

const Filter = () => {
  const type = useContext(TypeContext);

  return (
    <div className="input-group">
      <div className="input-group-text">Filter items</div>
      <select
        className="form-select"
        onChange={(e) => {
          type.setSelectedType(e.target.value);
        }}
        value={type.selectedType}
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
