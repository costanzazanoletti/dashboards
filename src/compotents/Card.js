import { useState } from 'react';
import Star from './Star';
import Toggle from './Toggle';
import { getDashboardDetail } from '../api';

const Card = ({ item, expanded, clickFunction }) => {
  const [dashboardItems, setDashboardItems] = useState([]);
  const clickEventHandler = async () => {
    clickFunction();
    const data = await getDashboardDetail(item.id);
    setDashboardItems(data);
  };

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
        {expanded && (
          <div>
            {dashboardItems.map((item) => {
              return <p key={item.id}>{item.type}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
