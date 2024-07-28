import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
const root = ReactDOM.createRoot(entryPoint);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
