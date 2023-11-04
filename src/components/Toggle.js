import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
const Toggle = ({ expanded }) => {
  return expanded ? (
    <FaCaretUp title="caret-up" />
  ) : (
    <FaCaretDown title="caret-down" />
  );
};
export default Toggle;
