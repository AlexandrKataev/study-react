import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Sanek</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Bye</div>
      </div>
    </div>
  );
};

export default Dialogs;
