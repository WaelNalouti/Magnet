import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
// import UserPopup from "./UserPopup";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <p className="logo__text">Magnet</p>
      </Link>

      <div className="header__data">
        <p className="header__data__agency">Agence Rapide poste, Tataouine</p>
        <div className="header__data__user">
          <div className="header__data__user--info">
            <p className="user--info__username">Moez Hamdaoui</p>
            <p className="user--info__userrole">Chef d'agence</p>
          </div>
          <Avatar className="user--info--avatar">M</Avatar>
        </div>
      </div>
      {/* <UserPopup /> */}
    </div>
  );
}

export default Header;
