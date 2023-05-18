import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-header.png";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <div className="navContainer">
          <ul>
            <li></li>
          </ul>
        </div>
        <a href="www.google.com" className="landlordPortal">
          Espace propriétaire
        </a>
      </div>
    </header>
  );
};

export default Header;
