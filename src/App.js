/* import React from 'react';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Element name="hero"><HeroSlider /></Element>
      <Element name="services"><ServicesSection /></Element>
      <Element name="portfolio"><PortfolioSection /></Element>
      <Footer />

    </>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ExtendedPortfolio from './pages/ExtendedPortfolio';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div id="home">
              <HeroSlider />
              <ServicesSection />
              <About />
              <PortfolioSection />
              <Contacts />
              <Footer />
            </div>
          }
        />
        <Route path="/portfolio" element={<ExtendedPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;

