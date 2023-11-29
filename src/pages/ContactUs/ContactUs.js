import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import NavBar from "../../pages/NavBar/index.js";
import clogo from "../../SVG/comp.svg";
import Footer from "../../Component/Footer";
import "./ContactUs.css";

export const ContactUs = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjvqqvqj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("success");
        form.reset(); // Clear the form fields
      } else {
        setSubmissionStatus("failed");
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Form submission error:", error);
    }
  };

  const resetStatus = () => {
    setSubmissionStatus(null);
  };

  const renderAlert = () => {
    if (submissionStatus === "success") {
      return (
        <div className="alert alert-success">Form submitted successfully!</div>
      );
    } else if (submissionStatus === "failed") {
      return <div className="alert alert-danger">Form submission failed!</div>;
    } else if (submissionStatus === "error") {
      return (
        <div className="alert alert-danger">
          Form submission error. Please try again later.
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <NavBar pageTitle="We'd love to hear from you" PageName="Contact Us" />
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
            xl={6}
            lg={6}
            md={6}
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
                className="text-white text-center"
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
      <Footer />
    </>
  );
};

export default ContactUs;
