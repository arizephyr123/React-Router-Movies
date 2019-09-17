import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";

//Router added to wrap <App/>
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
