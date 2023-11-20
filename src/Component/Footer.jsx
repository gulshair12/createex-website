import React from "react";
import "../Css/Footer.css";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../SVG/logo.svg";
import facebook from "../SVG/New folder/scg/facebook.svg";
import Twitter from "../SVG/New folder/scg/twitter.svg";
import Instgram from "../SVG/New folder/scg/instagram.svg";
export const Footer = () => {
  return (
    <>
      <footer className="Footerbackground pt-5 pb-4">
        <div className="footerDiv container text-center text-md-left">
          <div className="row  text-center  text-md-left">
            <div className="col-md-3 col-lg-3 colxl-3 mx-auto mt-3">
              <img src={logo} alt="Createex" />
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "0.8em",
                  color: "#747E93",
                }}
              >
                Reach out to us anytime and lets create a better future for all
                technology users together , forever . We are open to all types
                of collab offers and tons more.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                style={{
                  color: "#72B63C",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                }}
              >
                Menu
              </h5>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  OUR SERVICES
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  PROJECTS
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  ABOUT US
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  CONTACT
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                style={{
                  color: "#72B63C",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                }}
              >
                IT SERVICES
              </h5>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  WEB DEVELOPMENT
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  APP DEVELOPMENT
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  API INTEGRATION
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  SEE MORE
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                style={{
                  color: "#72B63C",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                }}
              >
                SERVICES
              </h5>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  WEB DESIGN
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  APP DESIGN
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  UX EXECUTION
                </a>
              </p>
              <p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontSize: "0.7em",
                    color: "#747e93",
                  }}
                >
                  SEE MORE
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                style={{
                  color: "#72B63C",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                }}
              >
                SOCIAL MEDIA
              </h5>
              <div className="d-flex justify-content-center mr-auto p-2">
                <div
                  className="SocialiconBackground facebook"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  <img src={facebook} alt="FaceBook" />
                </div>
                <div
                  className="SocialiconBackground"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  <img src={Twitter} alt="Twitter" />
                </div>
                <div className="SocialiconBackground insta">
                  <img src={Instgram} alt="Instagram" />
                </div>
              </div>
            </div>
          </div>
          <hr className="FooterLine" />
          <div className="d-flex justify-content-between align-items-center my-0">
            <div style={{ marginRight: "50px" }}>
              <p className="end">
                Copyright © 2022 CREATEEX. All Rights Reserved.
              </p>
            </div>
            <div
              className="justify-content-end d-flex"
              style={{
                color: "#747E93",
              }}
            >
              <p style={{ marginRight: "20px" }}>Terms of Use</p>
              <p className="privacyend">Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
