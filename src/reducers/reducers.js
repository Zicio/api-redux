import {
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  REMOVE_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  services: [],
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, error: null, loading: true };
    case FETCH_SERVICES_SUCCESS:
      return { ...state, services: action.payload, loading: false };
    case FETCH_SERVICES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case REMOVE_SERVICE:
      const id = action.payload;
      return {
        ...state,
        loading: false,
        services: state.services.filter((o) => o.id !== id),
      };
    default:
      return state;
  }
};

export default fetchReducer;
