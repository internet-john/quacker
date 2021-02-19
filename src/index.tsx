import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";

import rootReducer from "./reducers";
import Quacker from "./components/Quacker";
import "./index.css";
import StoreState from "./reducers/types";
import { DispatchType, ActionType } from "./actions/types";

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store: Store<StoreState, ActionType> & {
  dispatch: DispatchType;
} = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Quacker />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
