import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Quacker from "./components/Quacker";
// import rootReducer from './reducers'
import "./index.css";

// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Quacker />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
