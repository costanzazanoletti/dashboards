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
        return <FaRegFileAlt />;
        break;
      case 'VISUALIZATION':
        return <FaRegChartBar />;
        break;
      case 'MAP':
        return <FaRegMap />;
        break;
      case 'MESSAGES':
        return <FaRegEnvelope />;
        break;
      default:
        return <FaRegCircle />;
        break;
    }
  };
  return getIcon();
};
export default DashboardItemIcon;
