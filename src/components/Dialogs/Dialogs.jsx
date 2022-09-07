import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageText,
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  // Массивы на основе входящих данных с "сервера"
  const state = props.dialogsPage;
  //   console.log(props);
  const dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  const messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} id={m.id} time={m.time} />
  ));

  const newMessage = React.createRef();

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageTextChange = () => {
    const text = newMessage.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.newMessage}>
        <div>
          <textarea
            ref={newMessage}
            value={state.newMessageText}
            onChange={onNewMessageTextChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
