import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import carouselOne from "../assets/carroussel-1.jpg";
import carouselTwo from "../assets/carroussel-2.jpg";
import carouselThree from "../assets/carroussel-3.jpg";
import carouselFour from "../assets/carroussel-4.jpg";
import RentCard from "../components/RentCard";

import rents from "../data/rentals.json";

const Home = () => {
  return (
    <div className="home">
      <div
        className="carousel-container"
        style={{
          backgroundImage: `url(${carouselFour})`,
        }}
      >
        <div className="carousel-filter">
          <section className="carousel-text">
            <h3>Trouver votre location de vacences en Touraine</h3>
            <h1>Conciergerie Airbnb à Tours et Amboise</h1>
          </section>
        </div>
      </div>
      <section className="container prestations-section">
        <h3>Propriétaire et désireux de déléguer la gestion de votre bien ?</h3>
        <h3>De l'accueil au ménage, nous gérons tout à votre place !</h3>
        <div className="prestations-btn">
          <Link to="/contact" className="btn">
            Nos prestations en détails
          </Link>
        </div>
        <div className="prestation-cards">
          <div className="prestation-card">
            <h3>Ménage premium</h3>
            <p>
              Par notre partenaire de confiance (respect des normes d'hygiènes
              COVID-19)
            </p>
          </div>
          <div className="prestation-card">
            <h3>Blanchisserie haut de gamme</h3>
            <p>
              En gérant l'ensemble du linge de maison (draps, serviettes,
              torchons)
            </p>
          </div>
          <div className="prestation-card">
            <h3>Accueil personnalisé 24/7</h3>
            <p>
              A toute heure du jour en personne et de la nuit grâce à nos
              boitiers à clés
            </p>
          </div>
          <div className="prestation-card">
            <h3>Création des annonces</h3>
            <p>
              Photos professionnelles, description attrayante et personnalisée
            </p>
          </div>
          <div className="prestation-card">
            <h3>Optimisation des prix</h3>
            <p>
              Sur toutes les plateformes de locations courtes durées grâce a
              notre logiciel de management
            </p>
          </div>
          <div className="prestation-card">
            <h3>Entretien des propriétés</h3>
            <p>
              Fournitures des consommables pour la 1ére nuit et gestion des
              incidents
            </p>
          </div>
        </div>
      </section>
      <section className="location-section">
        <div className="container">
          <div className="location-section-top">
            <div>
              <h2>Nos Locations</h2>
              <p>Découvrez notre selection du moment</p>
            </div>
            <Link to="/rentals">Découvrir toutes nos locations</Link>
          </div>
          <div className="rent-selection">
            <RentCard rent={rents[0]} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
