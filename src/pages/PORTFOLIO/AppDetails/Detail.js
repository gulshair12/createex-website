import React from "react";
import NavBar from "../../NavBar/index";
import Footer from "../../../Component/Footer";
import { Container } from "react-bootstrap";
import AppCaseStudy from "../../../SVG/AppCaseStudy.svg";

const Detail = () => {
  return (
    <>
      <NavBar pageTitle="Nutrient Food App Case Study" PageName="Portfolio" />
      <Container className="mb-2">
        <img
          style={{ maxWidth: "100%" }}
          src={AppCaseStudy}
          alt="app-case-study"
        />
      </Container>
      <Footer />
    </>
  );
};

export default Detail;
