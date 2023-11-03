import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
const Toggle = ({ expanded }) => {
  return expanded ? <FaCaretUp /> : <FaCaretDown />;
};
export default Toggle;
