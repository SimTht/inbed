/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../assets/logo-header.png";
import burgerLogo from "../assets/burger-logo.svg";

function Header() {
  const [activateSideMenu, setActivateSideMenu] = useState(false);
  const burgerClick = () => {
    setActivateSideMenu(!activateSideMenu);
  };
  const closeSideMenuClick = () => {};

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} className="logo-header" alt="logo" />
        </Link>

        <nav
          className={`nav-list ${activateSideMenu ? "side-menu" : ""}`}
          onClick={() => {
            setActivateSideMenu(false);
          }}
        >
          <button
            className="close-side-menu-cross"
            onClick={() => {
              setActivateSideMenu(false);
            }}
          >
            🞪
          </button>
          <ul>
            <li className="nav-list-item">
              <Link to="/">Acceuil</Link>
            </li>
            <li className="nav-list-item">
              <a
                href="https://www.airbnb.fr/users/479186120/listings"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nos Locations
              </a>
            </li>

            <li className="nav-list-item">
              <Link to="/contact">Déléguez la gestion de votre bien</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/about">Qui sommes nous ?</Link>
            </li>
          </ul>
        </nav>

        <div className="burger-menu" onClick={burgerClick}>
          <img src={burgerLogo} alt="burger_menu_logo" />
        </div>

        <a
          href="https://app.superhote.com/#/login"
          className="btn landlord-portal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Espace propriétaire
        </a>
      </div>
    </header>
  );
}

export default Header;
