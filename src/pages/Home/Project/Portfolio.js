import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './portfolio.css';
import MainTab from './Tabbar/MainTabBar.js';
export const Portfolio = () => {
  return (
    <>
      <div className='image'>
        <Container
          style={{
            marginTop: '20%',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
        
            <Row>
              <Col>
              <h5
                style={{
                  marginTop: '10%',
                  color: '#72B63C',
                }}
              >
                Portfolio
              </h5>
              </Col>
            </Row>
            <Row>
              <Col>
              <h4>Explore Latest Projects</h4>
              </Col>
            </Row>
          <Col>
            <Row>
              <p
                style={{
                  justifyContent: 'center',
                  fontSize: '0.8em',
                  color: '#444444',
                }}
              >
                Software development outsourcing is just a tool to achieve
                business goals. But there is no way to get worthwhile results
                without cooperation and trust between a client company.
              </p>
            </Row>
          </Col>
          <MainTab
            style={{
              marginBottom: '30px !important',
              justifyContent: 'center',
            }}
          />
        </Container>
      </div>
    </>
  );
};
export default Portfolio;
