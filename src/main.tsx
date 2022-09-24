import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "$store/index";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "$assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
