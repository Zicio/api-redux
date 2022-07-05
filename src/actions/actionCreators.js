import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_REQUEST,
  UPDATE_SERVICES,
  REMOVE_SERVICE,
  EDIT_SERVICE,
} from "./actionTypes";

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

export const changeServiceField = (name, value, content) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
    content,
  },
});

export const removeService = () => ({
  type: REMOVE_SERVICE,
});

export const updateServices = (id) => ({
  type: UPDATE_SERVICES,
  payload: id,
});

export const fetchServiceRequest = (id) => ({
  type: FETCH_SERVICE_REQUEST,
  payload: id,
});

// export const editService = (item) => ({
//   type: EDIT_SERVICE,
//   payload: item,
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

export const fetchService = (id) => async (dispatch) => {
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
    dispatch(removeService(id));
    dispatch(updateServices(id));
  } catch (err) {
    dispatch(fetchServicesFailure(err.message));
  }
};
