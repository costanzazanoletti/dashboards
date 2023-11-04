import { FaRegStar, FaStar } from 'react-icons/fa';
const Star = ({ full }) => {
  return full ? <FaStar title="full-star" /> : <FaRegStar title="empty-star" />;
};
export default Star;
