import React from "react";
import ReactDOM from "react-dom";

const Quacker = () => (
  <h1>Quack!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <Quacker />
  </React.StrictMode>,
  document.getElementById("root")
);