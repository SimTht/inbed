import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-header.png";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} className="logo-header" alt="logo" />
        </Link>

        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Acceuil</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/rentals">Nos Location</Link>
          </li>

          <li className="nav-list-item">
            <Link to="/contact">Déléguez la gestion de votre bien</Link>
          </li>

          <li className="nav-list-item">
            <Link to="/about">Qui sommes nous ?</Link>
          </li>
        </ul>

        <a
          href="https://www.google.com"
          className="btn landlord-portal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Espace propriétaire
        </a>
      </div>
    </header>
  );
};

export default Header;
