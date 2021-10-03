import React from "react";
import style from "./Header.module.css";
import logo from "../../../assets/logoFull.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} className={style.logo} alt="CarTrawler" />
    </div>
  );
};

export default Header;
