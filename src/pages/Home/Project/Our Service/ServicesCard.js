import React from 'react';
import { Card } from 'react-bootstrap';
import '../Our Service/card.css';

export const CardComponent = ({ logoSrc, heading, paragraph }) => {
  return (
    <div className='d-flex flex-column align-items-center my-5 OurService'>
      <img className='cardLogo' src={logoSrc} alt='GraphicDesigning' />
      <Card className='service'>
        <h3
          style={{
            fontSize: '1.2em'
          }}
        >
          {heading}
        </h3>
        <p
          className='mb-4'
          style={{
            textAlign: 'center',
            color: '#B6BCC9',
            fontSize: '0.8em',
          }}
        >
          {paragraph}
        </p>
      </Card>
    </div>
  );
};

export default CardComponent;
