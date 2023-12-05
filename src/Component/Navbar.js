import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { ReactComponent as Brand } from "../SVG/logo.svg";
import Logo from "../SVG/logo1.png";
// import { Link, ScrollLink } from "react-scroll";
import "../Css/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  // const handleNavLinkClick = (link) => {
  //   setActiveLink(link);

  //   if (link === "/Project") {
  //     const projectSection = document.getElementById("project-section");

  //     if (projectSection) {
  //       projectSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     // Navigate to other links
  //     navigate(link);
  //   }
  // };
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
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
                  to="/home"
                  style={({ isActive }) => ({
                    color: isActive ? "#72b63c" : "#444444",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/Project"
                  // id="services"
                  href="#services"
                  // spy={true}
                  // smooth={true}
                  // offset={-100}
                  // duration={500}
                >
                  Our Services
                </NavLink>
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
                <NavLink
                  to="/team"
                  style={({ isActive }) => ({
                    color: isActive ? "#72b63c" : "#444444",
                  })}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Client"
                  style={({ isActive }) => ({
                    color: isActive ? "#72b63c" : "#444444",
                  })}
                >
                  Client
                </NavLink>
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
