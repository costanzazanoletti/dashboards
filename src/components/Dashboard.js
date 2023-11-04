import { useState, useEffect, useCallback } from 'react';
import Star from './Star';
import Toggle from './Toggle';
import DashboardItemsList from './DashboardItemsList';
import { getDashboardDetail } from '../api';

const Dashboard = ({ item, expanded, handleClick, selectedType }) => {
  const [dashboardItems, setDashboardItems] = useState([]);

  const updateDashboardItems = useCallback(async () => {
    const data = await getDashboardDetail(item.id);
    setDashboardItems(
      data.filter((element) => {
        return selectedType === '' || selectedType === element.type;
      })
    );
  }, [item.id, selectedType]);

  const clickEventHandler = async () => {
    !expanded && handleClick();
  };

  useEffect(() => {
    if (expanded) {
      updateDashboardItems();
    }
  }, [expanded, updateDashboardItems]);

  return (
    <div className="card shadow" onClick={clickEventHandler}>
      <div className="card-body">
        <div className="card-title d-flex align-items-center justify-content-between">
          <h5>{item.displayName}</h5>
          <div>
            <Star full={item.starred} />
            <Toggle expanded={expanded} />
          </div>
        </div>
        {expanded && <DashboardItemsList items={dashboardItems} />}
      </div>
    </div>
  );
};

export default Dashboard;