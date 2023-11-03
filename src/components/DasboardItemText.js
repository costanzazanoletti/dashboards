const DashboardItemText = ({ item }) => {
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
  return <>{getItemName()}</>;
};
export default DashboardItemText;
