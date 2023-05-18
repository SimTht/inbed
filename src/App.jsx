import "./App.css";
import Header from "./components/Header.jxs";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RentList from "./pages/RentList.jsx";
import InfoContact from "./pages/InfoContact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<RentList />} />
        <Route path="/contact" element={<InfoContact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
