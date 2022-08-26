import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink className={s.navLink} to={path}>
      <div className={s.dialog}>
        <img src={props.avatar}></img>

        <a>{props.name}</a>
      </div>
    </NavLink>
  );
};

export default DialogItem;
