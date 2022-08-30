import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  addPost,
  updateNewPostText,
  updateNewMessageText,
  addNewMessage,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText}
          addNewMessage={addNewMessage}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
  reportWebVitals();
};
rerenderEntireTree();
