import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  services: [],
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, loading: true };
    case FETCH_SERVICES_SUCCESS:
      return { ...state, services: action.payload, loading: false };
    default:
      return state;
  }
};

export default fetchReducer;
