import { useState, useEffect, useCallback, useContext } from 'react';
import StarToggle from './StarToggle';
import Toggle from './Toggle';
import DashboardItemsList from './DashboardItemsList';
import { getDashboardDetail } from '../api';
import { TypeContext } from '../App';

const Dashboard = ({ item, expanded, handleClick }) => {
  const [dashboardItems, setDashboardItems] = useState([]);
  const type = useContext(TypeContext);

  const updateDashboardItems = useCallback(async () => {
    const data = await getDashboardDetail(item.id);
    setDashboardItems(
      data.filter((element) => {
        return type.selectedType === '' || type.selectedType === element.type;
      })
    );
  }, [item.id, type.selectedType]);

  const clickEventHandler = async () => {
    !expanded && handleClick();
  };

  useEffect(() => {
    if (expanded) {
      updateDashboardItems();
    }
  }, [expanded, updateDashboardItems]);

  return (
    <div
      className="card shadow"
      data-testid="dashboard-card"
      onClick={clickEventHandler}
    >
      <div className="card-body">
        <div className="card-title d-flex align-items-center justify-content-between">
          <h5>{item.displayName}</h5>
          <div>
            <StarToggle id={item.id} />
            <Toggle expanded={expanded} />
          </div>
        </div>
        {expanded && <DashboardItemsList items={dashboardItems} />}
      </div>
    </div>
  );
};

export default Dashboard;
