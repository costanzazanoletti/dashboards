import { useState, useEffect, useCallback } from 'react';
import Star from './Star';
import Toggle from './Toggle';
import DashboardItem from './DashboardItem';
import { getDashboardDetail } from '../api';

const Card = ({ item, expanded, onClick, selectedType }) => {
  const [dashboardItems, setDashboardItems] = useState([]);

  const updateDetails = useCallback(async () => {
    const data = await getDashboardDetail(item.id);
    setDashboardItems(data);
  }, [item.id]);

  const renderItems = () => {
    const items = dashboardItems.filter((element) => {
      return selectedType === '' || selectedType === element.type;
    });
    if (items.length > 0)
      return (
        <div className="list-group">
          {items.map((item) => {
            if (selectedType === '' || selectedType === item.type) {
              return (
                <div
                  className="list-group-item d-flex align-items-center justify-content-between"
                  key={item.id}
                >
                  <DashboardItem item={item} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    else return <div>No items</div>;
  };

  const clickEventHandler = async () => {
    if (!expanded) {
      onClick();
    }
  };

  useEffect(() => {
    if (expanded) {
      updateDetails();
    }
  }, [expanded, updateDetails]);

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
        {expanded && renderItems()}
      </div>
    </div>
  );
};

export default Card;
