import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const posts = [
  { id: 1, message: "Hello!", likes: 5 },
  { id: 2, message: "How are you?", likes: 13 },
  { id: 3, message: "bye bye!", likes: 28 },
  { id: 4, message: "Hello again!", likes: 50 },
];

// Данные с "сервера"
const dialogsData = [
  {
    id: 1,
    name: "Dima",
  },
  {
    id: 2,
    name: "Andrew",
  },
  {
    id: 3,
    name: "Sveta",
  },
  {
    id: 4,
    name: "Sanek",
  },
  {
    id: 5,
    name: "Valera",
  },
];

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are yo?" },
  { id: 3, message: "Bye" },
  { id: 4, message: "Bye" },
  { id: 5, message: "Bye" },
  { id: 6, message: "Bye" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
