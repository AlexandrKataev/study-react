import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
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

  // Массивы на основе входящих данных с "сервера"
  const dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
