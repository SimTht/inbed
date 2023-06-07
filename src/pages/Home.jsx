import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RentCard from "../components/RentCard";
import TopRates from "../components/TopRates";

import "./Home.css";

import carrousel1 from "../assets/carrousel/1.webp";
import carrousel2 from "../assets/carrousel/2.webp";
import carrousel3 from "../assets/carrousel/3.webp";
import carrousel4 from "../assets/carrousel/4.webp";
import rents from "../data/rentals.json";

function Home() {
  const carrouselPaths = [carrousel1, carrousel2, carrousel3, carrousel4];
  const [currentCarrouselIndex, setCurrentCarrouselIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentCarrouselIndex(
        (prevIndex) => (prevIndex + 1) % carrouselPaths.length
      );
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentCarrouselIndex]);

  return (
    <main>
      <div />
      <div className="carrousel-container">
        {carrouselPaths.map((carrouselPath, index) => (
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${carrouselPath})`,
              opacity: `${currentCarrouselIndex === index ? "1" : 0}`,
            }}
            key={index}
          />
        ))}
        <div className="carousel-filter">
          <div className="carousel-text">
            <h3>Trouver votre location de vacences en Touraine</h3>
            <h1>Conciergerie Airbnb à Tours et Amboise</h1>
          </div>
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
            {rents.map((rent) => (
              <div className="selection-card-container" key={rent.id}>
                <RentCard rent={rent} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="top-rate">
        <TopRates />
      </section>
    </main>
  );
}

export default Home;
