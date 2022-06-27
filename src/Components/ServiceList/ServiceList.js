import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../actions/actionCreators";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const services = useSelector((state) => state.serviceList.services.items);
  console.log(services.items);

  return services.map((service) => (
    <ServiceCard card={service} key={service.id} />
  ));
};

export default ServiceList;
