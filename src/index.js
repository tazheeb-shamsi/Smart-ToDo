import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// Global Styles
import "./styles/global.css";
// Pages Styles
import "./styles/components/pages/home.css";
// Layouts
import "./styles/components/layouts/modal.css";
// Notification
import "./styles/components/notification/popup.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
