import { FaRegStar, FaStar } from 'react-icons/fa';
const Star = ({ full }) => {
  return full ? <FaStar /> : <FaRegStar />;
};
export default Star;
