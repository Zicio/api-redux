import { FETCH_SERVICE_REQUEST } from "../actions/actionTypes";

const initialState = {
  cards: [],
};

const serviceCardReducer = (state = initialState, action) => {
  let arr;
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      arr = [...state.cards];
      arr.push({ id: action.payload, loading: true });
      return { ...state, cards: arr };
    default:
      return state;
  }
};

export default serviceCardReducer;
