import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  changeServiceField,
  fetchСhangedService,
} from "../../actions/actionCreators";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServiceEdit = () => {
  const dispatch = useDispatch();
  const serviceState = useSelector((state) => state.serviceEdit);
  const loading = null;
  console.log(serviceState);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newState = serviceState;
    newState[fieldName] = fieldValue;
    dispatch(changeServiceField(newState));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchСhangedService(serviceState, navigate)); //TODO Разобраться со срабатыванием useNavigate после получения Response
    // navigate("/api-redux/services");
  };

  return (
    <Form onSubmit={handleSubmit} id="editForm">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Название</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={serviceState.name}
          onChange={handleChange}
          // required="true"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Стоимость</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={serviceState.price}
          onChange={handleChange}
          // required="true"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          type="text"
          name="content"
          value={serviceState.content}
          onChange={handleChange}
          // required="true"
        />
      </Form.Group>
      <ButtonGroup aria-label="Basic example">
        <Link to={`/api-redux/services/`}>
          <Button variant="danger">Отмена</Button>
        </Link>
        {/* <Link to={`/api-redux/services/`}> */}
        {loading ? (
          <Button variant="danger">
            <Spinner animation="border" role="status" variant="light" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Button>
        ) : (
          <Button variant="primary" type="submit" form="editForm">
            Сохранить
          </Button>
        )}
        {/* </Link> */}
      </ButtonGroup>
    </Form>
  );
};

export default ServiceEdit;
