import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import InfoContact from "./pages/InfoContact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import HousingTours from "./pages/HousingTours";
import HousingAmboise from "./pages/HousingAmboise";
import HousingIndreLoire from "./pages/HousingIndreLoire";
import FAQ from "./pages/FAQ";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<InfoContact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tours" element={<HousingTours />} />
        <Route path="/amboise" element={<HousingAmboise />} />
        <Route path="/indreetloire" element={<HousingIndreLoire />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
