import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import clogo from "../../../SVG/comp.svg"
import "./style.css";
export const index = () => {
  return (
    <>
      <div className="bg-image d-flex align-items-center justify-content-center mt-5 pt-5">
        <Container className="d-flex">
          <Col lg={6}>
            <div className="Contactus py-5 pl-4">
              <h1
                style={{
                  color: "#72B63C",
                  fontSize: "25px",
                }}
              >
                Contact Us
              </h1>
              <p
                className="text-white "
                style={{
                  fontSize: "0.6rem",
                }}
              >
                Our friendly custom service team always respond to enquiries
                witchin 24 hours
              </p>
              <input placeholder="Name" className="input" />
              <input placeholder="Email" className="input my-4" />
              <textarea
                id="w3review"
                name="w3review"
                rows="10"
                cols="50"
                placeholder="Message"
                className="Messageinput"
              ></textarea>

              <button className="send-btn  my-2">Send</button>
            </div>
          </Col>
          <Col lg={10}>
            <img className="sideimg " src={clogo} alt="sideimg" />
          </Col>
        </Container>
      </div>
    </>
  );
};
export default index;
