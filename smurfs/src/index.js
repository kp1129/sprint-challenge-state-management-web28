import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {smurfsReducer, initialState} from './reducers/smurfsReducer';

import {createStore} from 'redux';
import {Provider} from 'react-redux';


const store = createStore(smurfsReducer, initialState);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById("root"));
