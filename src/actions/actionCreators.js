import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_REQUEST,
  UPDATE_SERVICES,
  STOP_LOADING,
  // EDIT_SERVICE,
} from "./actionTypes";
import { useNavigate } from "react-router-dom";

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: error,
});

export const fetchServicesSuccess = (items) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: items,
});

export const changeServiceField = (item) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: item,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const updateServices = (id) => ({
  type: UPDATE_SERVICES,
  payload: id,
});

export const fetchServiceRequest = (id) => ({
  type: FETCH_SERVICE_REQUEST,
  payload: id,
});

// export const editService = () => ({
//   type: EDIT_SERVICE,
//   payload:
// });

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (err) {
    dispatch(fetchServicesFailure(err.message));
  }
};

export const fetchServiceDelete = (id) => async (dispatch) => {
  dispatch(fetchServiceRequest(id));
  try {
    const url = new URL(`${process.env.REACT_APP_API_URL}`);
    url.searchParams.set("id", `${id}`);
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(stopLoading());
    dispatch(updateServices(id));
  } catch (err) {
    dispatch(fetchServicesFailure(err.message));
  }
};

export const fetchServiceEdit = (id) => async (dispatch) => {
  dispatch(fetchServiceRequest(id));
  try {
    const url = new URL(`${process.env.REACT_APP_API_URL}`);
    url.searchParams.set("id", `${id}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(stopLoading());
    const item = await response.json();
    dispatch(changeServiceField(item));
  } catch (err) {
    dispatch(fetchServicesFailure(err.message));
  }
};

export const fetchСhangedService = (data, navigate) => async (dispatch) => {
  dispatch(fetchServiceRequest()); //TODO Написать новые actionTypes для EDIT (эти дублируются)
  try {
    const url = new URL(`${process.env.REACT_APP_API_URL}`);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(stopLoading()); //TODO Написать новые actionTypes для EDIT (эти дублируются)
    navigate("/api-redux/services");
  } catch (err) {
    dispatch(fetchServicesFailure(err.message));
  }
};
