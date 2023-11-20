import React from 'react';
import { Container, Col } from 'react-bootstrap';
import './ContactUs.css';
import NavBar from '../../pages/NavBar/index.js';
import Footer from '../../Component/Footer';
export const ContactUs = () => {
  return (
    <>
      <NavBar pageTitle='We d love to hear from you' PageName='Contact Us' />
      <div className='Contactusbg'>
        <Container>
          <Col
            lg={6}
            className='d-flex align-items-center justify-content-center flex-column '
          >
            <div className='mainContactus pt-4  pb-4 mb-4'>
              <h1
                style={{
                  color: '#72B63C',
                }}
              >
                Contact Us
              </h1>
              <p
                className='text-white me-4 ms-4 mb-4 mt-4'
              >
                Our friendly custom service team always respond to enquiries
                witchin 24 hours
              </p>
              <input placeholder='Name' className='Contactusinput ' />
              <input placeholder='Email' className='Contactusinput  mt-4' />
              <textarea
                id='w3review'
                name='w3review'
                rows='4'
                cols='50'
                placeholder='Message'
                className='ContactusMessageinput  mt-4'
              ></textarea>
              {/* <Row className='justify-content-center Align-items-center'> */}
              <button className='Contactussend-btn'>Send</button>
            </div>
            {/* </Row> */}
          </Col>
          {/* </div> */}
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
