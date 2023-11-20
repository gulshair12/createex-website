import React from 'react';
import './LandScapeCard.css';
import arrowsvg from '../../../SVG/Subpages/PortfolioCard/Component 11 – 1.png';
export const LandScapeCard = ({ LandScapeImage }) => {
  return (
    <div className='LandScapecard'>
      <div className='LandScapebox'>
        <img src={LandScapeImage} />
      </div>
      <div className='LandScapebox'></div>
      <div className='LandScapecircle'>
        <img src={arrowsvg} alt='' />
      </div>
    </div>
  );
};
export default LandScapeCard;
