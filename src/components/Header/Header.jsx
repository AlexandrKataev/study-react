import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo></Logo>
    </header>
  );
};

export default Header;
