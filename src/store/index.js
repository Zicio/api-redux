import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import serviceCardReducer from "../reducers/serviceCard";
import serviceEditReducer from "../reducers/serviceEdit";
import serviceListReducer from "../reducers/serviceList";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceCard: serviceCardReducer,
  serviceEdit: serviceEditReducer,
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
