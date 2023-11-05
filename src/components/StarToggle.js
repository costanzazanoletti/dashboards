import { useEffect, useState } from 'react';
import Star from './Star';
const StarToggle = ({ id }) => {
  const [isToggled, setIsToggled] = useState(
    localStorage.getItem(`dashboard-${id}-starred`) === 'true' || false
  );
  const handleClick = (event) => {
    event.stopPropagation();
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    localStorage.setItem(`dashboard-${id}-starred`, isToggled);
  }, [id, isToggled]);

  return (
    <button className="btn" onClick={handleClick}>
      <Star full={isToggled} />
    </button>
  );
};

export default StarToggle;
