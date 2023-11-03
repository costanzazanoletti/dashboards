import DashboardItemText from './DasboardItemText';
import DashboardItemIcon from './DashboardItemIcon';

const DashboardItem = ({ item }) => {
  const getItemName = () => {
    switch (item.type) {
      case 'TEXT':
        return item.text;
        break;
      case 'VISUALIZATION':
        return item.visualization.name;
        break;
      case 'MAP':
        return item.map.name;
        break;
      case 'MESSAGES':
        return 'Messages';
        break;
      default:
        return 'unknown';
        break;
    }
  };
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
