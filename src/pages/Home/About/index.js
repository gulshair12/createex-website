import { React, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import clogo from "../../../SVG/comp.svg";
import "./style.css";

const index = () => {
  return (
    <>
      <div
        className="bg-image mb-5"
        style={{
          marginTop: "60px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <Container
          className="d-flex justify-content-between align-items-center"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Col
            lg={6}
            style={{
              paddingLeft: "100px",
            }}
          >
            <div className="Contactus py-4">
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
                  fontSize: "0.8rem",
                }}
              >
                Our friendly custom service team always respond to enquiries
                within 24 hours
              </p>

              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                />
                <input
                  type="email"
                  name="_replyto"
                  placeholder="Email"
                  className="input my-4"
                />
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Message"
                  className="Messageinput"
                ></textarea>
                <button type="submit" className="send-btn my-2">
                  Send
                </button>
              </form>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};
export default index;
