import "./index.css";
import store from "./redux/state";

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
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
          addNewMessage={store.addNewMessage.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
  reportWebVitals();
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());
