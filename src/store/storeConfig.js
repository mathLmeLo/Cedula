import { createStore, combineReducers } from "redux";

import sessionReducer from "../store/reducers/session";

const reducers = combineReducers({
  session: sessionReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
