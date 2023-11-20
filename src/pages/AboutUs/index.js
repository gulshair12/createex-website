import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import LogoMission from '../../SVG/LogoMission.svg';
import LogoTeam from '../../SVG/TeamLogo.svg';
import Cardimage from '../../SVG/PNG/cardimg.png';
import logo1 from '../../SVG/Subpages/AboutUs/Group 6515.svg';
import logo2 from '../../SVG/Subpages/AboutUs/Group 6516.svg';
import logo3 from '../../SVG/Subpages/AboutUs/Group 6517.svg';
import logo4 from '../../SVG/Subpages/AboutUs/Group 6518.svg';
import TeamCard from '../Home/Team/TeamCard/teamCard.js';
import person1 from '../../SVG/PNG/team1.jpg';
import person2 from '../../SVG/PNG/Team2.jpg';
import person3 from '../../SVG/PNG/Team3.jpg';
import person4 from '../../SVG/PNG/Team4.jpg';
import CrouselCard from '../Home/Client/crousel/crouselCard.js';
import Prev from '../../SVG/prev.svg';
import Next from '../../SVG/next.svg';
import Whyuspng from '../../SVG/Subpages/AboutUs/final/Component 9 – 1.svg';
import tick from '../../SVG/Subpages/AboutUs/final/Icon feather-check.svg';
import NavBar from '../NavBar/index.js';
import Footer from '../../Component/Footer';
export const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = index => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < 10) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <NavBar pageTitle='About Our Company ' PageName='About us' />
      {/* First Part */}
      <div
        className='BgImage'
        style={{
          marginTop: '120px',
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
                <h6 style={{ color: '#72B63C' }}>About Us</h6>
                <h4 style={{ color: '#444444', fontSize: '2.6vw' }}>
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
                  style={{ fontSize: '0.8vw' }}
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
                className='sideImage'
                src={Cardimage}
                alt='Two Persons in Image'
                style={{
                  width: '100%',
                  paddingLeft: '80px',
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* First Part */}
      <Container
        className='shadow '
        style={{
          marginTop: '150px',
          justifyContent: 'center',
          alignItem: 'center',
          marginBottom: '50px',
        }}
      >
        <Row
          className='backDot'
          style={{
            padding: '3%',
          }}
        >
          <Col
            style={{
              width: '40%',
            }}
          >
            <h6
              style={{
                color: '#72B63C',
              }}
            >
              Our Awards
            </h6>
            <h4
              className='Ourh4'
              style={{
                fontSize: '1.55vw',
                color: '#444444',
              }}
            >
              Our Achievements
            </h4>
            <p
              className='pCount'
              style={{
                color: ' #747E93',
                fontSize: '0.8vw',
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
      {/* First Part */}
      <div className='bgImage'>
        <Row
          style={{
            marginBottom: '140px',
          }}
        >
          <h6
            className='text-center'
            style={{
              color: '#72B63C',
              marginTop: '80px',
            }}
          >
            Work Process
          </h6>
          <h4
            className='text-light text-center'
            style={{
              fontSize: '1.5vw !important',
            }}
          >
            How to work it
          </h4>
        </Row>
        <Container
          style={{ marginTop: '80px !important', paddingBottom: '100px' }}
        >
          <Row className='d-flex justify-content-center align-items-center text-align-center'>
            <Col>
              <img src={logo1} alt='Aboutuspage' style={{ width: '100%' }} />
              <h6 className='subh6'>Project Discussion</h6>
            </Col>
            <Col>
              <img src={logo2} alt='Aboutuspage' style={{ width: '100%' }} />
              <h6 className='subh6   '>Testing & Trying</h6>
            </Col>
            <Col>
              <img src={logo3} alt='Aboutuspage' style={{ width: '100%' }} />
              <h6 className='subh6   '>Execute & install</h6>
            </Col>
            <Col>
              <img src={logo4} alt='Aboutuspage' style={{ width: '100%' }} />
              <h6 className='subh6   '>Deliver result</h6>
            </Col>
          </Row>
        </Container>
      </div>
      {/* First Part */}
      <div
        className='teambackground'
        style={{
          paddingTop: '15%',
        }}
      >
        <Container
          style={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Row>
            <h5
              style={{
                color: '#72B63C',
              }}
            >
              Team Members
            </h5>
          </Row>
          <Row>
            <h4
              style={{
                color: '#444444',
                fontSize: '1.5vw',
              }}
            >
              Meet Our Experienced
            </h4>
          </Row>
          <Row
            style={{
              marginBottom: '20%',
            }}
          >
            <Col>
              <TeamCard
                title='Web Developer'
                subtitle='React Js'
                image={person1} // Replace with the actual image path
              />
            </Col>
            <Col>
              <TeamCard
                title='Graphic Designer'
                subtitle='Director/Co-founder'
                image={person2} // Replace with the actual image path
              />
            </Col>
            <Col>
              <TeamCard
                title='Graphic Designer'
                subtitle='Senior UI/UX Designer'
                image={person3} // Replace with the actual image path
              />
            </Col>
            <Col>
              <TeamCard
                title='Graphic Designer'
                subtitle='Graphic Designer'
                image={person4} // Replace with the actual image path
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* First Part */}
      {/* <div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          selectedItem={activeIndex}
          onChange={handleSlideChange}
          infiniteLoop={false}
          showIndicators={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={33.33}
        >
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 0} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 1} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 2} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 3} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 4} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 5} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 6} />
          </div>
        </Carousel>{' '}
        <div
          className={`custom-arrow custom-prev shadow ${
            activeIndex === 0 ? 'disabled' : ''
          }`}
          onClick={handlePrevClick}
        >
          <img src={Prev} alt='leftButton' />
        </div>
        <div
          className={`custom-arrow custom-next shadow ${
            activeIndex === 6 ? 'disabled' : ''
          }`}
          onClick={handleNextClick}
        >
          <img src={Next} alt='RightButton' />
        </div>
      </div> */}
      <Container>
        <div class='custom-carousel-container'>
          <div class='carousel-content'>
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              selectedItem={activeIndex}
              onChange={handleSlideChange}
              infiniteLoop={false}
              showIndicators={true}
              emulateTouch={true}
              centerMode={true}
              centerSlidePercentage={33.33}
              renderArrowPrev={() => null} // Hide default prev arrow
              renderArrowNext={() => null} // Hide default next arrow
            >
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 0} />
              </div>
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 1} />
              </div>
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 2} />
              </div>
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 3} />
              </div>
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 4} />
              </div>
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 5} />
              </div>
              <div class='carousel-image'>
                <CrouselCard isActive={activeIndex === 6} />
              </div>
            </Carousel>
          </div>
        </div>
      </Container>
      <div
        class="custom-prev custom-arrow shadow ${activeIndex === 0 ? 'disabled' : ''}"
        onClick={handlePrevClick}
      >
        <img src={Prev} alt='leftButton' />
      </div>
      <div
        class="custom-next custom-arrow shadow ${activeIndex === 2 ? 'disabled' : ''}"
        onClick={handleNextClick}
      >
        <img src={Next} alt='RightButton' />
      </div>
      {/* Why Only We */}
      <div
        style={{
          marginTop: '10%',
          marginBottom: '10%',
        }}
      >
        <Container className='justify-content-space-between d-flex align-items-center'>
          <Col>
            <img
              src={Whyuspng}
              alt='two persons watching something'
              style={{
                width: '90%',
              }}
            />
          </Col>
          <Col>
            <Row>
              <h6
                style={{
                  color: '#72B63C',
                }}
              >
                Why Only We{' '}
              </h6>
              <h4
                style={{
                  color: '#444444',
                }}
              >
                Reason For Choosing
              </h4>
              <h4
                style={{
                  color: '#444444',
                }}
              >
                Our{' '}
                <span
                  style={{
                    color: '#72B63C',
                  }}
                >
                  Company
                </span>
              </h4>
              <p
                style={{
                  color: '#444444',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrice. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
              <Col>
                <Row>
                  <div className='d-flex'>
                    <img
                      src={tick}
                      style={{
                        width: '10%',
                      }}
                      alt='Tick Icon'
                    />
                    <h5
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      Trusted by leaders
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className='d-flex'>
                    <img
                      src={tick}
                      style={{
                        width: '10%',
                      }}
                      alt='Tick Icon'
                    />
                    <h5
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      Diverse Portfolio
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className='d-flex'>
                    <img
                      src={tick}
                      style={{
                        width: '10%',
                      }}
                      alt='Tick Icon'
                    />
                    <h5
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      Pioneers in Consultancy
                    </h5>
                  </div>
                </Row>
              </Col>
              <Col
                style={{
                  marginLeft: '15px',
                }}
              >
                <Row>
                  <div className='d-flex'>
                    <img
                      src={tick}
                      style={{
                        width: '10%',
                      }}
                      alt='Tick Icon'
                    />
                    <h5
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      Good Track Record
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className='d-flex'>
                    <img
                      src={tick}
                      style={{
                        width: '10%',
                      }}
                      alt='Tick Icon'
                    />
                    <h5
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      Exponential Growth
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className='d-flex'>
                    <img
                      src={tick}
                      style={{
                        width: '10%',
                      }}
                      alt='Tick Icon'
                    />
                    <h5
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      Brand Equity
                    </h5>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Testimonial;
