import Card from './Card';
const CardList = ({ items }) => {
  if (items.length === 0) {
    return <div className="alert alert-info">No dahboards</div>;
  }
  return (
    <ul className="list-unstyled">
      {items.map((item) => {
        return (
          <li className="py-2" key={item.id}>
            <Card item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
