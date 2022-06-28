const ServiceCard = ({ card }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-text">{card.title}</h5>
      </div>
    </div>
  );
};

export default ServiceCard;
