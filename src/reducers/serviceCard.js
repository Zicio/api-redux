import { FETCH_SERVICE_REQUEST, REMOVE_SERVICE } from "../actions/actionTypes";

const initialState = {
  id: null,
  loading: false,
};

const serviceCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      return { ...state, id: action.payload, loading: true };
    case REMOVE_SERVICE:
      return { initialState };
    default:
      return state;
  }
};

export default serviceCardReducer;
