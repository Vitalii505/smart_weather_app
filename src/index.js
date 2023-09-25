import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import { store } from "./redux/store";
import { Router } from "react-router-dom";
import { history } from "./utils/history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
