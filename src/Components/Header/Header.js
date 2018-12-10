import React from "react";
import Logo from "./../../img/logoSC.png";
import "./Header.css";

export default function Toolbar(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
    </header>
  );
}
