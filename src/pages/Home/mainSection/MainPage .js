import React from "react";
import NavBar from "../../../Component/Navbar.js";
import HeroSection from "../heroSection.jsx";
import AboutUs from "../AboutUs/index.js";
import Project from "../Project/index.js";
import Team from "../Team/index.js";
import Client from "../Client/index.js";
import About from "../About/Contact.js";
import Footer from "../../../Component/Footer.jsx";
export const MainPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />

      <AboutUs />

      <Project />

      <Team />

      <Client />

      <About />
      <Footer />
    </div>
  );
};
export default MainPage;
