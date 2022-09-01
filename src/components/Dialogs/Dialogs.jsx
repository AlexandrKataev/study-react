import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageText } from "../../redux/state";

const Dialogs = (props) => {
  // Массивы на основе входящих данных с "сервера"
  const dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  const messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} id={m.id} time={m.time} />
  ));

  const newMessage = React.createRef();

  const sendMessage = () => {
    const text = newMessage.current.value;
    props.dispatch({ type: "ADD-MESSAGE", newText: text });
  };

  const onNewMessageTextChange = () => {
    const text = newMessage.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.newMessage}>
        <div>
          <textarea
            ref={newMessage}
            value={props.state.newMessageText}
            onChange={onNewMessageTextChange}
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
