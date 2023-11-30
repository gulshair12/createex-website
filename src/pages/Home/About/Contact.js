import { React, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import clogo from "../../../SVG/comp.svg";
import "./style.css";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbjvvzyj", {
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
        <div className="alert alert-success" onClick={resetStatus}>
          Form submitted successfully! Click to close.
        </div>
      );
    } else if (submissionStatus === "failed") {
      return (
        <div className="alert alert-danger" onClick={resetStatus}>
          Form submission failed! Click to close.
        </div>
      );
    } else if (submissionStatus === "error") {
      return (
        <div className="alert alert-danger" onClick={resetStatus}>
          Form submission error. Please try again later. Click to close.
        </div>
      );
    }
    return null;
  };

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
                className="text-white "
                style={{
                  fontSize: "0.8rem",
                }}
              >
                Our friendly custom service team always respond to enquiries
                within 24 hours
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
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
              {renderAlert()}
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};
export default Contact;
