import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changeServiceField } from "../../actions/actionCreators";

const ServiceEdit = () => {
  const dispatch = useDispatch();
  const serviceState = useSelector((state) => state.serviceEdit);
  console.log(serviceState);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newState = serviceState;
    newState[fieldName] = fieldValue;
    dispatch(changeServiceField(newState));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Название</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={serviceState.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Стоимость</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={serviceState.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          type="text"
          name="content"
          value={serviceState.content}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ServiceEdit;
