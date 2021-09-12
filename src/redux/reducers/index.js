import { combineReducers } from "redux";

import { itemReducer } from "./itemReducer";

const reducers = combineReducers(
  {
    itemReducer: itemReducer,
  }
);

export default reducers;
