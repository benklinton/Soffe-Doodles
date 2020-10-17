import React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide from './images/Slide.jpg';
import Slide2 from './images/Slide2.jpg';
import Slide3 from './images/Slide3.jpg';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={Slide}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={Slide2}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={Slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;