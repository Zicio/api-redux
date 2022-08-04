import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  STOP_LOADING,
} from "../actions/actionTypes";

const initialState = {
  id: "",
  name: "",
  price: "",
  content: "",
  loading: false,
};

const serviceEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { id, name, price, content } = action.payload;
      return { ...state, id: id, name: name, price: price, content: content };
    case FETCH_SERVICES_REQUEST:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default serviceEditReducer;
