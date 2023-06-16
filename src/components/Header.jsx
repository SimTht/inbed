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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon"
              style={{
                width: "1em",
                height: "1em",
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
            </svg>
          </button>
          <ul>
            <li className="nav-list-item">
              <Link to="/">Accueil</Link>
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
