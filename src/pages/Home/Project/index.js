import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "./Our Service/ServicesCard.js";
import "../Project/style.css";
import Graphic from "../../../SVG/Graphic.svg";
import uiUx from "../../../SVG/UIUX.svg";
import aPI from "../../../SVG/ApiInteg.svg";
import Web from "../../../SVG/Webdevelopment.svg";
import Counter from "../Project/Couter.js";
import Portfolio from "./Portfolio.js";
import Erp from "../../../SVG/erp.svg";
import Marketing from "../../../SVG/marketing.svg";
import Ecommerece from "../../../SVG/ecommerce.svg";
import Aws from "../../../SVG/aws.svg";
import UX from "../../../SVG/ux.svg";
import Brand from "../../../SVG/branding.svg";
import AI from "../../../SVG/ai.svg";

export const Index = () => {
  return (
    <>
      <div className="bgImage">
        <Row
          style={{
            marginBottom: "140px",
          }}
        >
          <h6
            className="text-center"
            style={{
              color: "#72B63C",
              marginTop: "80px",
              fontSize: "1.2em",
            }}
          >
            Our Service
          </h6>
          <h4
            className="text-light text-center"
            style={{
              fontSize: "1.5em",
            }}
          >
            We Offer a Wide Variety of IT Services
          </h4>
          <div className=" d-flex justify-content-center mt-5">
            <span
              className="span1 text-center px-5 py-2 "
              style={{
                color: "#72B63C",
                fontSize: "1.4em",
              }}
            >
              Development Services
            </span>
          </div>
        </Row>
        <Container className="pb-5">
          <Row className=" d-flex justify-content-center">
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Graphic}
                heading="Graphic Design"
                paragraph="Agency provides a full service range including technical skills, design."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={uiUx}
                heading="Ui / UX"
                paragraph="Design and propose product improvements through periodical and accurate testing."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={aPI}
                heading="API integration"
                paragraph="Cloud Integrate for product improvements through periodical and accurate testing."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Web}
                heading="Web devlopement"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>

            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Erp}
                heading="Erp Solutions"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Ecommerece}
                heading="E-commerce"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Marketing}
                heading="Digital Marketing"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Aws}
                heading="Amazon Web Services"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <div className=" d-flex justify-content-center mt-5 mb-5">
              <span
                className="span1 text-center px-5 py-2 "
                style={{
                  color: "#72B63C",
                  fontSize: "1.4em",
                }}
              >
                Design Services 
              </span>
            </div>

            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Graphic}
                heading="App Design"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={UX}
                heading="UX Execution"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={Brand}
                heading="Branding"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
            <Col xl={3} lg={4} md={6} sm={8} xs={11}>
              <ServicesCard
                logoSrc={AI}
                heading="Artificial Intelligence"
                paragraph="Full service range including technical skills, design, business."
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Counter />
      <Portfolio />
    </>
  );
};

export default Index;
