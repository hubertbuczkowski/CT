import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainPage from "./apps/main-page/MainPage";

import { loadCarRentalData } from "./redux/actions/main";

import MainStore from "./redux/MainStore";

const store = MainStore();
store.dispatch(loadCarRentalData());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
