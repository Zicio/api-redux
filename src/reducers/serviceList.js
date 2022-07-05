import {
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  UPDATE_SERVICES,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  services: [],
  error: null,
};

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, error: null, loading: true };
    case FETCH_SERVICES_SUCCESS:
      return { ...state, services: action.payload, loading: false };
    case FETCH_SERVICES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case UPDATE_SERVICES:
      const id = action.payload;
      return {
        ...state,
        services: state.services.filter((o) => o.id !== id),
      };
    default:
      return state;
  }
};

export default serviceListReducer;
