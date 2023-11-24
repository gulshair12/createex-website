import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import NavBar from "../../pages/NavBar/index.js";
import clogo from "../../SVG/comp.svg";
import Footer from "../../Component/Footer";

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
                within 24 hours
              </p>
              {submissionStatus && renderAlert()}
              <form onSubmit={handleSubmit}>
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
                  rows="5"
                  placeholder="Message"
                  className="Messageinput"
                ></textarea>
                <button type="submit" className="send-btn my-2">
                  Send
                </button>
              </form>
            </div>
          </Col>
          <Col lg={10}>
            <img className="sideimg " src={clogo} alt="sideimg" />
          </Col>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
