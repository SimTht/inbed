import React, { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import InfoContact from "./pages/InfoContact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<InfoContact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
