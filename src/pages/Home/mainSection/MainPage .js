import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../../../Component/Navbar.js";
import HeroSection from "../heroSection.jsx";
import AboutUs from "../AboutUs/index.js";
import Project from "../Project/index.js";
import Team from "../Team/index.js";
import Client from "../Client/index.js";
import About from "../About/Contact.js";
import Footer from "../../../Component/Footer.jsx";
export const MainPage = () => {
  const location = useLocation();
  const [sectionId, setSectionId] = useState(null);

  useEffect(() => {
    if (location.state && location.state.sectionId) {
      setSectionId(location.state.sectionId);
    }
  }, [location]);

  useEffect(() => {
    const scrollToSection = () => {
      if (sectionId) {
        const servicesSection = document.getElementById(sectionId);
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Delay the scroll action to ensure the element is ready
    const timeout = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timeout);
  }, [sectionId]);

  return (
    <div>
      <NavBar />
      <HeroSection />

      <AboutUs />
      <section id="services" >
        <Project />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="client" >
        <Client />
      </section>

      <About />
      <Footer />
    </div>
  );
};
export default MainPage;
