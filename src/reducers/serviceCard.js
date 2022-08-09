import { FETCH_SERVICE_REQUEST, STOP_LOADING } from "../actions/actionTypes";

// const initialState = {
//   id: null,
//   loading: false,
// };

const initialState = {
  cards: [],
};

const serviceCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      state.cards.push({ id: action.payload, loading: true });
      return state;
    // case STOP_LOADING:
    //   return { ...state, loading: false };
    default:
      return state;
  }
};

export default serviceCardReducer;
