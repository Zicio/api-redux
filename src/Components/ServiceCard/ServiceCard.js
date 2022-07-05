import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../actions/actionCreators";
import { Alert, Spinner } from "react-bootstrap";
import "./ServiceCard.scss";

const ServiceCard = ({ card }) => {
  const dispatch = useDispatch();
  const serviceState = useSelector((state) => state.serviceCard);
  let loading = null;
  let error = null;
  if (serviceState.id === card.id) {
    loading = serviceState.loading;
    error = serviceState.error;
  }

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(fetchService(card.id));
  };

  if (error) {
    return <Alert variant="danger">Произошла ошибка</Alert>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          {card.name} {card.price}
        </p>
        {loading ? (
          <Button variant="danger">
            <Spinner animation="border" role="status" variant="light" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Button>
        ) : (
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">🖉</Button>
            <Button variant="danger" onClick={handleRemove}>
              ╳
            </Button>
          </ButtonGroup>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
