import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/kiosk.css";
import "./styles/risk-slider.css";
import "./styles/survey.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
