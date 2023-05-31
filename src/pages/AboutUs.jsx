import React from "react";
import { Link } from "react-router-dom";

import "./AboutUs.css";

import imgNR from "../assets/starskyandhutch.jpg";
import artNR from "../assets/article-print.png";

const AboutUs = () => {
  return (
    <main>
      <section className="about-us-top">
        <h1>Qui sommes nous ?</h1>
      </section>
      <section className="about-us-middle">
        <div className="container about-us-middle-main">
          <div className="left">
            <h3>À votre service ...</h3>
            <p>
              Fondée en 2020, Inbed est né d'une passion commune pour
              l'immobilier et d'une envie d'entreprendre en Touraine, région
              forte d'une grande attractivité économique et touristique.
            </p>
            <p>
              Inbed est une agence de conciergerie locale à taille humaine. Nos
              racines tourangelles nous permettent de proposer des services de
              grande qualité aux voyageurs et une réactivité inégalée aux
              propriétaires.
            </p>
            <p>
              Notre but est d'accompagner les propriétaires dans la gestion de
              leurs biens en location saisonnière (Airbnb, Booking.com, Abritel)
              en offrant une solution tout compris.
            </p>
          </div>
          <div className="right">
            <img src={imgNR} alt="Starsky_and_Hutch" />
            <small>
              Maxime (gauche) et Alexi (droite) - Fondateurs de Inbed - Source :{" "}
              <a
                href="https://www.lanouvellerepublique.fr/indre-et-loire/commune/athee-sur-cher/ouverture-d-une-conciergerie-immobiliere-a-athee-sur-cher"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nouvelle République
              </a>
            </small>
          </div>
        </div>
        <Link to="/contact" className="btn">
          Nos prestations en détails
        </Link>
      </section>
      <section className="about-us-bottom container">
        <div>
          <h4>Ils parlent de nous :</h4>
          <img src={artNR} alt="article_NR" />
          <a
            href="https://www.lanouvellerepublique.fr/indre-et-loire/commune/athee-sur-cher/ouverture-d-une-conciergerie-immobiliere-a-athee-sur-cher"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire l'article
          </a>
        </div>
        <div>
          <h4>Nos partenaires :</h4>
          <ul>
            <li>Elis Touraine</li>
            <li>Axeo Amboise</li>
            <li>Airbnb</li>
            <li>Booking.com</li>
            <li>Abritel</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
