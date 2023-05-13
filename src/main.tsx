import store, { persistor } from "$store/index";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import "$assets/css/style.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
