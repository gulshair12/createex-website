import React from "react";
import { Container, Col } from "react-bootstrap";
import NavBar from "../../pages/NavBar/index.js";
import Footer from "../../Component/Footer";
export const ContactUs = () => {
  return (
    <>
      <NavBar pageTitle="We d love to hear from you" PageName="Contact Us" />


      <div className="bg-image d-flex align-items-center justify-content-center mt-4">
        <Container>
          <Col lg={6}>
            <div className="Contactus py-5">
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
        </Container>
      </div>
      {/* <div className="Contactusbg">
        <Container>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center flex-column "
          >
            <div className="mainContactus pt-4  pb-4 mb-4">
              <h1
                style={{
                  color: "#72B63C",
                }}
              >
                Contact Us
              </h1>
              <p className="text-white me-4 ms-4 mb-4 mt-4">
                Our friendly custom service team always respond to enquiries
                witchin 24 hours
              </p>
              <input placeholder="Name" className="Contactusinput " />
              <input placeholder="Email" className="Contactusinput  mt-4" />
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Message"
                className="ContactusMessageinput  mt-4"
              ></textarea>
              <button className="Contactussend-btn">Send</button>
            </div>
          </Col>
        </Container>
      </div> */}
      <Footer />
    </>
  );
};
export default ContactUs;
