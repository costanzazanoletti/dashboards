import DashboardItemText from './DasboardItemText';
import DashboardItemIcon from './DashboardItemIcon';

const DashboardItem = ({ item }) => {
  return (
    <>
      <div className="p-3">
        <DashboardItemIcon type={item.type} />
      </div>
      <div className="p-3">
        <DashboardItemText item={item} />
      </div>
    </>
  );
};
export default DashboardItem;
