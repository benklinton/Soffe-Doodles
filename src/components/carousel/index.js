import React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel'
function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://via.placeholder.com/1920x1080?text=FirstSlide"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://via.placeholder.com/1920x1080?text=SecondSlide"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://via.placeholder.com/1920x1080?text=ThirdSlide"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;