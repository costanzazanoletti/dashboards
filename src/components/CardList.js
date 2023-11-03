import { useState } from 'react';
import Card from './Card';

const CardList = ({ items, selectedType }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  if (items.length === 0) {
    return <div className="alert alert-info">No dahboards</div>;
  }

  return (
    <ul className="list-unstyled">
      {items.map((item, index) => {
        return (
          <li className="py-2" key={item.id}>
            <Card
              item={item}
              expanded={index === expandedIndex}
              selectedType={selectedType}
              clickFunction={() => {
                setExpandedIndex(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
