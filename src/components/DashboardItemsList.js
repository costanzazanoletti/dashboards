import DashboardItem from './DashboardItem';

const DashboardItemsList = ({ items }) => {
  if (items.length > 0)
    return (
      <div className="list-group">
        {items.map((item) => {
          return (
            <div
              className="list-group-item d-flex align-items-center justify-content-between"
              key={item.id}
            >
              <DashboardItem item={item} />
            </div>
          );
        })}
      </div>
    );
  else return <div>No items</div>;
};

export default DashboardItemsList;
