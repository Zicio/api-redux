import {
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  // FETCH_SERVICES_SUCCESS,
  REMOVE_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const serviceCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, error: null, loading: true };
    // case FETCH_SERVICES_SUCCESS:
    //   return { ...state, loading: false };
    case FETCH_SERVICES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case REMOVE_SERVICE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default serviceCardReducer;
