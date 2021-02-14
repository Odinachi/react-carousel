import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../../assets/images/1.jpg';
import image2 from './../../assets/images/2.jpg';
import image3 from './../../assets/images/3.jpg';




const CarouselContainer = () => {
    const imageSet = {Height: "250px", Width: "80px"}
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          height = {imageSet.Height}
          width = {imageSet.Width}
        />
        <Carousel.Caption>
          <h3>LAGOS</h3>
          <p>a city of big dreams</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          height = {imageSet.Height}
          width = {imageSet.Width}
        />
        <Carousel.Caption>
          <h3>Lagos</h3>
          <p>A city where everyone believes nothing is impossible</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          height = {imageSet.Height}
          width = {imageSet.Width}
        />
        <Carousel.Caption>
          <h3>LAGOS</h3>
          <p>You'll learn to love this city to the fullest</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;