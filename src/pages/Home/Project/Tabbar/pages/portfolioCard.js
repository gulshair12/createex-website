import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './portfolioCard.css';
import First from '../../../../../SVG/New folder/scg/first.svg';
import Second from '../../../../../SVG/New folder/scg/second arrow.svg';
import Third from '../../../../../SVG/New folder/scg/third.svg';
const PortfolioCard = ({ title, imageSrc, detail }) => {
  return (
    <>
      <Card
        className='shadow'
        style={{
          width: '20rem',
          height: '20rem',
          borderRadius: '22px',
          marginTop: '70px',
        }}
      >
        <div
          style={{
            maxHeight: '300px',
            overflow: 'hidden',
            borderRadius: '22px 22px 0px 0px',
          }}
        >
          <Card.Img
            variant='top'
            style={{ width: '100%', objectFit: 'cover' }}
            src={imageSrc}
          />
        </div>
        <Card.Body>
          <Row>
            <Col>
              <h5
                style={{
                  color: '#444444',
                  textAlign: 'left',
                  fontSize: '0.8em',
                }}
              >
                {title}
              </h5>
            </Col>
            <Col>
              <button className='Seebtnport'>
                Get Started
                <img className='a-1' src={First} alt='Arrow 1' />
                <img className='a-2' src={Second} alt='Arrow 2' />
                <img className='a-3' src={Third} alt='Arrow 3' />
              </button>
            </Col>
          </Row>
          <p style={{ color: '#444444', fontSize: '0.6rem', textAlign: 'left' }}>
            {detail}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default PortfolioCard;
