import {
  FaRegMap,
  FaRegEnvelope,
  FaRegChartBar,
  FaRegFileAlt,
  FaRegCircle,
} from 'react-icons/fa';

const DashboardItemIcon = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'TEXT':
        return <FaRegFileAlt title="icon-text" />;

      case 'VISUALIZATION':
        return <FaRegChartBar title="icon-chart" />;

      case 'MAP':
        return <FaRegMap title="icon-map" />;

      case 'MESSAGES':
        return <FaRegEnvelope title="icon-message" />;

      default:
        return <FaRegCircle title="icon-default" />;
    }
  };
  return getIcon();
};
export default DashboardItemIcon;
