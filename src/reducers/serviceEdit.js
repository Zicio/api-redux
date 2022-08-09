import {
  CHANGE_SERVICE_FIELD,
  FETCH_CHANGE_SERVICE_SUCCESS,
  FETCH_CHANGE_SERVICE_FAILURE,
  FETCH_CHANGE_SERVICE_REQUEST,
} from "../actions/actionTypes";

const initialState = {
  id: "",
  name: "",
  price: "",
  content: "",
  loading: false,
  error: null,
};

const serviceEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { id, name, price, content } = action.payload;
      return { ...state, id: id, name: name, price: price, content: content };
    case FETCH_CHANGE_SERVICE_REQUEST:
      return { ...state, loading: true };
    case FETCH_CHANGE_SERVICE_SUCCESS:
      return { ...state, loading: false };
    case FETCH_CHANGE_SERVICE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default serviceEditReducer;
