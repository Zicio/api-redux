import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../actions/actionCreators";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const services = useSelector((state) => state.serviceList.services);
  console.log(services);

  return (
    <div className="service-list">
      {services.map((service) => (
        <ServiceCard card={service} key={service.id} />
      ))}
    </div>
  );
};

export default ServiceList;
