import React from "react";

import "./css/header.css";
import logo from "../assets/img/leboncoin.png";

function Header() {
  return (
    <div className="header">
      <div className="wrapper menu">
        <div>
          <div>
            <img src={logo} alt="leboncoin-logo" />
          </div>
          <div className="deposer-annonce">
            <i className="far fa-plus-square"></i>
            Déposer une annonce
          </div>
          <div className="search-button">
            <i className="fas fa-search"></i>Rechercher
          </div>
        </div>
        <div className="connection">
          <i className="far fa-user"></i>
          <p>Se connecter</p>
        </div>
      </div>
    </div>
  );
}

export default Header;