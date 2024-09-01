import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "../reducer/commonReducer";

const rootReducer = combineReducers({
  state: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
