import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/app/store";
import App from "./App";
import "./styles/index.scss";
import { verify } from "./redux/features/authSlice";

store.dispatch(verify(localStorage.getItem("token")));

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
