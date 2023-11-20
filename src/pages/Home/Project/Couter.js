import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css';
export const Couter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <Container
    className= "shadow"
      style={{
        marginTop: '150px',
        justifyContent: 'center',
        alignItem: 'center',
      }}
    >
      <Row
        className='backDot d-flex justify-content-center align-items-center flex-wrap '
        style={{
          padding: '3%',
        }}
      >
        <Col
          style={{
            maxWidth: '40%',
          }}
        >
          <h6
            style={{
              color: '#72B63C',
              fontSize:"2em"
            }}
          >
            Our Awards
          </h6>
          <h4
            className='Ourh4'
            style={{
              fontSize: '1.55em',
              color: '#444444',
            }}
          >
            Our Achievements
          </h4>
          <p
            className='pCount'
            style={{
              color: ' #747E93',
              fontSize: '0.8em',
            }}
          >
            Lorem ipsum dolor sit amet, elit, do risus commodo viverra
            facilisis.
          </p>
        </Col>
        <Col className='CountCol'>
          <h3 className='h3Count'>
            <CountUp start={1} end={10} duration={2} delay={0} />
            <span className='CountSpan'>Y</span>
          </h3>
          <h5 className='h5countTitle'>Experience</h5>
        </Col>
        <Col className='CountCol'>
          <h3 className='h3Count'>
            <CountUp start={1} end={200} duration={2} delay={0} />
            <span className='CountSpan'>+</span>
          </h3>
          <h5 className='h5countTitle'>Happy Clients</h5>
        </Col>
        <Col className='CountCol'>
          <h3 className='h3Count'>
            <CountUp start={1} end={300} duration={2} delay={0} />
            <span className='CountSpan'>+</span>
          </h3>
          <h5 className='h5countTitle'>Projects Done</h5>
        </Col>
      
      </Row>
    </Container>
  );
};
export default Couter;
