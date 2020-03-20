import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { smurfsReducer, initialState } from "./reducers/smurfsReducer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(smurfsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
