import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>
        {props.message} <span className={s.time}>{props.time}</span>
      </div>
    </div>
  );
};

export default Message;
