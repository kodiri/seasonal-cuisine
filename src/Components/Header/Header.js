import React from "react";
import { Link } from 'react-router-dom'
import Logo from "./../../img/logoSC.png";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}
