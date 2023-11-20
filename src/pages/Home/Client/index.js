import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Crousel from "./crousel/crouselTestimonial.js";
import "./style.css";
export const index = () => {
  return (
    <div className="testmoniabackground">
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Row>
          <h5
            style={{
              marginTop: "170px",
              color: "#72B63C",
            }}
          >
            Testimonial
          </h5>
        </Row>
        <Row>
          <h4
            style={{
              color: "#444444",
            }}
          >
            What Customers Say About Us
          </h4>
        </Row>
        <Row
          style={{
            marginTop: "10px",
          }}
        >
          <Col>
            <Crousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
