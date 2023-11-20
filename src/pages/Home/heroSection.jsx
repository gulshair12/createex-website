import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './heroSection.css';
import bgImg from '../../SVG/PNG/bgImage.png';
import First from '../../SVG/First-arrow.svg';
import Second from '../../SVG/Second-arrow.svg';
import Third from '../../SVG/third-arrow.svg';
const Section = () => {
  return (
    <>
      <div className='background'>
        <Row className='d-flex align-items-center justify-content-center justify-content-lg-start res'>
          <Col
            lg={6}
            className='Detail text-left'
            style={{
              marginLeft: '3%',
              marginTop: '12%',
            }}
          >
            <h6 className='heroh6'>Grow your Business</h6>
            <h3 className='heroh3 helvetica'>
              From Idea<span className='color'> Gen</span>
              <span className='Gen'>eration</span>
              <br />
              to Product Launch
            </h3>
            <p className='text-secondary'>
              Welcome to Software Housing, your premier destination for
              cutting-edge software development and design solutions. At
              Software Housing, we believe in the power of innovation and the
              limitless possibilities it brings to businesses of all sizes. As a
              leading software house
            </p>
            <button className='scroll-button mb-4 shadow'>
              Get Started
              <img className='arrow-1' src={First} alt='Arrow 1' />
              <img className='arrow-2' src={Second} alt='Arrow 2' />
              <img className='arrow-3' src={Third} alt='Arrow 3' />
            </button>
          </Col>
          <Col className='heroImage' style={{ maxWidth: '70%' }}>
            <img className='heroImage' src={bgImg} alt='heroImage' />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Section;
