import { useState, useEffect, useCallback, useContext } from 'react';
import StarToggle from './StarToggle';
import Toggle from './Toggle';
import DashboardItemList from './DashboardItemList';
import { getDashboardDetail } from '../api';
import { TypeContext } from '../App';

const Dashboard = ({ item, expanded, handleClick }) => {
  const [dashboardItems, setDashboardItems] = useState([]);
  const [filteredDashboardItems, setFilteredDashboardItems] = useState([]);
  const type = useContext(TypeContext);

  const updateDashboardItems = useCallback(async () => {
    const data = await getDashboardDetail(item.id);
    setDashboardItems(data);
  }, [item.id]);

  const filterDashboardItems = useCallback(() => {
    return dashboardItems.filter((element) => {
      return type.selectedType === '' || type.selectedType === element.type;
    });
  }, [dashboardItems, type.selectedType]);

  const clickEventHandler = async () => {
    !expanded && handleClick();
  };

  useEffect(() => {
    if (expanded) {
      updateDashboardItems();
    }
  }, [expanded, updateDashboardItems]);

  useEffect(() => {
    setFilteredDashboardItems(filterDashboardItems());
  }, [type.selectedType, filterDashboardItems, dashboardItems]);

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
        {expanded && <DashboardItemList items={filteredDashboardItems} />}
      </div>
    </div>
  );
};

export default Dashboard;
