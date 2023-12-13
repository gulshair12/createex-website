import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { ReactComponent as Brand } from "../SVG/logo.svg";
import Logo from "../SVG/logo1.png";
import "../Css/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleNavLinkClickServivces = () => {
    navigate("/", { state: { sectionId: "services" } });
  };
  const handleNavLinkClickTeam = () => {
    navigate("/", { state: { sectionId: "team" } });
  };
  const handleNavLinkClickClient = () => {
    navigate("/", { state: { sectionId: "client" } });
  };

  return (
    <nav className="mainnavbar pt-3">
      <div className="background-img">
        <div className="navContainer">
          <div className="logo ">
            <img src={Logo} alt="sitelogo" />
            <Brand />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger
              direction="left"
              size={32}
              color="green"
              duration={0.1}
            />
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#72b63c" : "#444444",
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <a href="#services" onClick={handleNavLinkClickServivces}>
                  Our Services
                </a>
              </li>

              <li>
                <NavLink
                  to="/portfolio"
                  style={({ isActive }) => ({
                    color: isActive ? "#72b63c" : "#444444",
                  })}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <a href="#team" onClick={handleNavLinkClickTeam}>
                  Team
                </a>
              </li>
              <li>
                <a href="#client" onClick={handleNavLinkClickClient}>
                  Client
                </a>
              </li>
              <li>
                <NavLink
                  to="/About"
                  style={({ isActive }) => ({
                    color: isActive ? "#72b63c" : "#444444",
                  })}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs">
                  <button className="btn-submit">Contact Us</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
