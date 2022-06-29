import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
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

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

// export const editService = (item) => ({
//   type: EDIT_SERVICE,
//   payload: item,
// });

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/posts?_limit=5"
    // );
    // if (!response.ok) {
    //   throw new Error(response.statusText);
    // }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
};
