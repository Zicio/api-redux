import { CHANGE_SERVICE_FIELD } from "../actions/actionTypes";

const initialState = {
  id: "",
  name: "",
  price: "",
  content: "",
};

const serviceEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { id, name, price, content } = action.payload;
      return { ...state, id: id, name: name, price: price, content: content };
    default:
      return state;
  }
};

export default serviceEditReducer;
