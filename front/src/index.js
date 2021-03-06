import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
