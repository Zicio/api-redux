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
import Alert from "react-bootstrap/Alert";

const ServiceEdit = () => {
  const dispatch = useDispatch();
  const serviceState = useSelector((state) => state.serviceEdit);
  const { name, price, content, loading, error } = serviceState;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newState = serviceState;
    newState[fieldName] = fieldValue;
    dispatch(changeServiceField(newState));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchСhangedService(serviceState, navigate));
  };

  if (error) {
    return <Alert variant="danger">Произошла ошибка</Alert>;
  }
  return (
    <Form onSubmit={handleSubmit} id="editForm">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Название</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          disabled={loading ? true : false}
          required={true}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Стоимость</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          disabled={loading ? true : false}
          required={true}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
          disabled={loading ? true : false}
          required={true}
        />
      </Form.Group>
      <ButtonGroup>
        <Link to={`/api-redux/services/`}>
          <Button variant="danger" disabled={loading ? true : false}>
            Отмена
          </Button>
        </Link>
        {loading ? (
          <Button variant="danger">
            <Spinner
              animation="border"
              role="status"
              variant="light"
              size="sm"
              style={{ margin: "25% auto" }}
            ></Spinner>
            <span className="visually-hidden">Loading...</span>
          </Button>
        ) : (
          <Button variant="primary" type="submit" form="editForm">
            Сохранить
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};

export default ServiceEdit;
