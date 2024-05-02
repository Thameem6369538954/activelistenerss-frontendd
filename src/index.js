import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
