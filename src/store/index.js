import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import catalogAddReducer from '../reducers/catalogAdd';
import catalogListReducer from '../reducers/catalogList';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  catalogList: catalogListReducer,
  catalogAdd: catalogAddReducer,
});

const store = createStore(
  reducer
);

export default store;
