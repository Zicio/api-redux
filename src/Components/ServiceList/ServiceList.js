import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../actions/actionCreators";
import "./ServiceList.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
import Alert from "react-bootstrap/Alert";

const ServiceList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const services = useSelector((state) => state.serviceList.services);
  const loading = useSelector((state) => state.serviceList.loading);
  const error = useSelector((state) => state.serviceList.error);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (error) {
    return <Alert variant="danger">Произошла ошибка</Alert>;
  }
  return (
    <div className="service-list">
      {services.map((service) => (
        <ServiceCard card={service} key={service.id} />
      ))}
    </div>
  );
};

export default ServiceList;
