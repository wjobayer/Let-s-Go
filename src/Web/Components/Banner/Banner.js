import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgone from '../../../images/3.jpg'
import bgtwo from '../../../images/2.jpg'
import bgthree from '../../../images/1.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade className="my-0">
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-light display-4 fw-bold">Explore Your Travel</h3>
      <p className="text-light">Cost friendly package on your way.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgtwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-light display-4 fw-bold">We Offer You Better Deals.</h3>
      <p className="text-light">Exciting schemes just a click away.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgthree}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-light display-4 fw-bold">Search Your Next Destination</h3>
      <p className="text-light">Book a ticket & just leave.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;