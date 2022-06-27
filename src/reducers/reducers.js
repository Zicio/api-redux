import { FETCH_SERVICES_SUCCESS } from "../actions/actionTypes";

const initialState = {
  services: [],
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return { ...state, services: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
