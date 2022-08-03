import {
  FETCH_SERVICE_REQUEST,
  REMOVE_SERVICE,
  EDIT_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  id: null,
  loading: false,
};

const serviceCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      return { ...state, id: action.payload, loading: true };
    case REMOVE_SERVICE:
      return { ...state, loading: false };
    //TODO Значок загрузки работает после загрузки
    case EDIT_SERVICE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default serviceCardReducer;
