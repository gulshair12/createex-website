import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Team.css";
import TeamCard from "../TeamCard/teamCard";
import Prev from "../../../../SVG/prev.svg";
import Next from "../../../../SVG/next.svg";

const Team = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < teamMembers.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const renderCarouselImages = () => {
    return teamMembers.map((item, index) => (
      <div className="carousel-image" key={index}>
        <TeamCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          isActive={index === activeIndex}
        />
      </div>
    ));
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
        {renderCarouselImages()}
      </Carousel>
      <div
        className={`custom-arrow custom-prev shadow ${
          activeIndex === 0 ? "disabled" : ""
        }`}
        onClick={handlePrevClick}
      >
        <img src={Prev} alt="leftButton" />
      </div>
      <div
        className={`custom-arrow custom-next shadow ${
          activeIndex === teamMembers.length - 1 ? "disabled" : ""
        }`}
        onClick={handleNextClick}
      >
        <img src={Next} alt="RightButton" />
      </div>
    </>
  );
};

export default Team;
