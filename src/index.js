import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import MainApp from "./components/main-app";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
