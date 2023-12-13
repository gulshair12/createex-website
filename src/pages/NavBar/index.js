import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { ReactComponent as Brand } from "../../SVG/logo.svg";
import Logo from "../../SVG/logo1.png";
import "./style.css";
import arrows from "../../SVG/Subpages/AboutUs/final/twoarrow.svg";

const Index = ({ pageTitle, PageName }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar ">
      <div className="navContainer pt-2">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <Brand style={{ width: "80%", height: "80%" }} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger direction="left" size={32} color="green" duration={0.1} />
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
              <NavLink
                to="/services"
                style={({ isActive }) => ({
                  color: isActive ? "#72b63c" : "#444444",
                })}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            paddingTop: "80px",
            textAlign: "center",
            color: "#444444",
            fontSize: "2vw",
          }}
        >
          {pageTitle}
        </h1>
      </div>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          paddingBottom: "40px",
        }}
      >
        <h6
          style={{
            color: "#444444",
          }}
        >
          Home
        </h6>
        <img
          src={arrows}
          style={{
            marginLeft: "10px",
            marginBottom: "5px",
            marginRight: "10px",
          }}
        />
        <h6
          style={{
            color: "#72B63C",
          }}
        >
          {PageName}
        </h6>
      </div>
    </nav>
  );
};

export default Index;
