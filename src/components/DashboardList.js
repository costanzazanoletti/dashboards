import { useState, useEffect, useCallback } from 'react';
import Dashboard from './Dashboard';
import { getDashboardList } from '../api';

const DashboardList = ({ selectedType }) => {
  const [items, setItems] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const updateDashboardList = useCallback(async () => {
    const data = await getDashboardList();
    setItems(data);
  }, []);

  useEffect(() => {
    updateDashboardList();
  }, [updateDashboardList]);

  return items.length === 0 ? (
    <div className="alert alert-info">No dahboards</div>
  ) : (
    <ul className="list-unstyled">
      {items.map((item, index) => {
        return (
          <li className="py-2" key={item.id}>
            <Dashboard
              item={item}
              expanded={index === expandedIndex}
              selectedType={selectedType}
              handleClick={() => {
                setExpandedIndex(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DashboardList;
