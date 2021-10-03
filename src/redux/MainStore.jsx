import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import main from "./reducers/main";
import modal from "./reducers/modal";

export default function MainStore() {
  return createStore(
    combineReducers({
      main,
      modal,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
}
