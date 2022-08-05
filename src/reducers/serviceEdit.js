import {
  CHANGE_SERVICE_FIELD,
  FETCH_CHANGE_SERVICES_SUCCESS,
  FETCH_CHANGE_SERVICE_REQUEST,
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
    case FETCH_CHANGE_SERVICE_REQUEST:
      return { ...state, loading: true };
    case FETCH_CHANGE_SERVICES_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default serviceEditReducer;
