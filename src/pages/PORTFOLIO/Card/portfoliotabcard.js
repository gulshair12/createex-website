import React from 'react';
import './portfoliotabcard.css';
import arrowsvg from '../../../SVG/Subpages/PortfolioCard/Component 11 – 1.png';

const Portfoliotabcard = ({ portfolioimg }) => {
  // Use destructuring to access the prop
  return (
    <>
      <div className='portfoliocard'>
        <div className='portfoliobox'>
          <img src={portfolioimg} alt='' height='100px' width='100%' />{' '}
          {/* Use alt attribute */}
        </div>
        <div className='portfoliobox'></div>
        <div className='portfoliocircle '>
          <img src={arrowsvg} alt='' />
        </div>
      </div>
    </>
  );
};

export default Portfoliotabcard;
