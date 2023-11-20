import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './index.css';
import LogoMission from '../../../SVG/LogoMission.svg';
import LogoTeam from '../../../SVG/TeamLogo.svg';
import Cardimage from '../../../SVG/PNG/cardimg.png';
export const About = () => {
  return (
    <>
      <div
        className='AboutBgImage'
        style={{
          marginTop: '10rem',
          paddingBottom: '150px',
        }}
      >
        <Container>
          <Row>
            <Col
              style={{
                marginTop: '100px',
              }}
            >
              <Card
                style={{
                  border: 'transparent',
                }}
              >
                <h6 style={{ color: '#72B63C', fontSize: '1.2em' }}>About Us</h6>
                <h4 style={{ color: '#444444', fontSize: '1.8em' }}>
                  We Deal with The
                  <br />
                  Aspects of{' '}
                  <span
                    style={{
                      color: '#72B63C',
                    }}
                  >
                    Professional
                  </span>
                  <br />
                  IT Services
                </h4>
                <p
                  className='mt-3 mb-4 text-muted'
                  style={{ fontSize: '0.8em' }}
                >
                  Welcome to Software Housing, your premier destination for
                  cutting-edge software development and design solutions. At
                  Software Housing, we believe in the power of innovation
                </p>
                <div className='position-relative d-flex'>
                  <div
                    className='shadow d-flex position-relative flex-column align-items-center justify-content-center'
                    style={{
                      width: 'calc(202px - 10px)',
                      height: '100px',
                      marginRight: '70px',
                      backgroundColor: '#fff',
                      zIndex: '10',
                    }}
                  >
                    <card>
                      <h5 style={{ color: '#444444' }}>Our Mission</h5>
                    </card>
                    <img
                      className='position-absolute'
                      src={LogoMission}
                      alt='MissionLogo'
                      style={{
                        zIndex: '10',
                        width: '40%',
                        marginTop: '110px',
                        marginLeft: '0px',
                      }}
                    />
                  </div>
                  <div
                    className='shadow d-flex position-relative flex-column align-items-center justify-content-center'
                    style={{
                      width: 'calc(202px - 10px)',
                      height: '100px',
                      marginLeft: '-30px',
                      zIndex: '10',
                    }}
                  >
                    <card>
                      <h5 style={{ color: '#444444' }}>Team Support</h5>
                    </card>
                    <img
                      src={LogoTeam}
                      alt='TeamLogo'
                      className='position-absolute'
                      style={{
                        marginTop: '110px',
                        width: '40%',
                        marginLeft: '0px',
                      }}
                    />
                  </div>
                </div>

                <button
                  className='LMAboutUs border-0'
                  type='#submit'
                  style={{
                    marginTop: '80px',
                    zIndex: '10',
                    width: '35%',
                    height: '40px',
                    // border: 'transparent',
                    borderRadius: '22px',
                    color: '#fff',
                    backgroundColor: '#72B63C',
                  }}
                >
                  Learn More
                </button>
              </Card>
            </Col>
            <Col
              style={{
                justifyContent: 'center',
                marginBottom: '80px',
              }}
            >
              <img
                className='AboutsideImage'
                src={Cardimage}
                alt='Two Persons in Image'
                style={{
                  width: '100%',
                  paddingLeft: '20px',
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
