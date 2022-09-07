import "./index.css";
import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          store={store}
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
  reportWebVitals();
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});
