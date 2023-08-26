import { combineReducers, createStore } from "redux";

import { boardReducer } from "./board/boardSlice";

const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = createStore(rootReducer);
