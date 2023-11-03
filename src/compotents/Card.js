import Star from './Star';

const Card = ({ item }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="card-title d-flex align-items-center justify-content-between">
          <h5>{item.displayName}</h5>
          <div>
            <Star full={item.starred} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
