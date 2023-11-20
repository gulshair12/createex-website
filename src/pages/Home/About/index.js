import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";
export const index = () => {
  return (
    <>
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
              {/* <Row className='justify-content-center Align-items-center'> */}
              <button className="send-btn  my-2">Send</button>
            </div>
            {/* </Row> */}
          </Col>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
};
export default index;
