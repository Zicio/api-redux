import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../actions/actionCreators";
import { Spinner } from "react-bootstrap";
import "./ServiceCard.scss";

const ServiceCard = ({ card }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.serviceCard.loading);
  console.log(loading);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(fetchService(card.id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          {card.name} {card.price}
        </p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">🖉</Button>
          {loading ? (
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Button variant="danger" onClick={handleRemove}>
              ╳
            </Button>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ServiceCard;
