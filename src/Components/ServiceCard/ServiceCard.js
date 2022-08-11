import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServiceDelete,
  fetchServiceEdit,
} from "../../actions/actionCreators";
import { Spinner } from "react-bootstrap";
import "./ServiceCard.scss";
import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {
  const dispatch = useDispatch();
  const serviceState = useSelector((state) => state.serviceCard);
  const index = serviceState.cards.findIndex((item) => item.id === card.id);
  const loading = index !== -1 ? true : false;

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(fetchServiceDelete(card.id));
  };

  const handleEdit = () => {
    dispatch(fetchServiceEdit(card.id));
  };

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
            <Link to={`/api-redux/services/${card.id}`}>
              <Button variant="primary" onClick={handleEdit}>
                🖉
              </Button>
            </Link>
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
