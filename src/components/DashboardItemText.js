const DashboardItemText = ({ item }) => {
  const getItemName = () => {
    switch (item.type) {
      case 'TEXT':
        return item.text;

      case 'VISUALIZATION':
        return item.visualization.name;

      case 'MAP':
        return item.map.name;

      case 'MESSAGES':
        return 'Messages';

      default:
        return 'unknown';
    }
  };
  return <span data-testid="item-text">{getItemName()}</span>;
};
export default DashboardItemText;
