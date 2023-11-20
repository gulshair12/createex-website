import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonial.css';
import Card from './crouselCard.js';
import Prev from '../../../../SVG/prev.svg';
import Next from '../../../../SVG/next.svg';

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
    if (activeIndex < 6) {
      // Assuming 6 is the maximum index
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
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
          <Card isActive={activeIndex === 0} />
        </div>
        <div className='carousel-image'>
          <Card isActive={activeIndex === 1} />
        </div>
        <div className='carousel-image'>
          <Card isActive={activeIndex === 2} />
        </div>
        <div className='carousel-image'>
          <Card isActive={activeIndex === 3} />
        </div>
        <div className='carousel-image'>
          <Card isActive={activeIndex === 4} />
        </div>
        <div className='carousel-image'>
          <Card isActive={activeIndex === 5} />
        </div>
        <div className='carousel-image'>
          <Card isActive={activeIndex === 6} />
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
    </>
  );
};

export default Testimonial;
