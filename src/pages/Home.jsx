import React from "react";

import "./Home.css";

import carouselOne from "../assets/carroussel-1.jpg";
import carouselTwo from "../assets/carroussel-2.jpg";
import carouselThree from "../assets/carroussel-3.jpg";
import carouselFour from "../assets/carroussel-4.jpg";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
