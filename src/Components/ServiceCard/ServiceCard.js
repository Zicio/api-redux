import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./ServiceCard.scss";

const ServiceCard = ({ card }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          {card.name} {card.price}
        </p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">🖉</Button>
          <Button variant="danger">╳</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ServiceCard;
