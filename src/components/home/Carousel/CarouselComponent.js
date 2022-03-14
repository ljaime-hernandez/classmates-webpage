import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FirstSlide } from './slides/FirstSlide';
import { SecondSlide } from './slides/SecondSlide';
import { ThirdSlide } from './slides/ThirdSlide';

export const CarouselComponent = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;

  return (
    <Carousel variant="dark" className="home__first-page">
        <Carousel.Item>
            <FirstSlide/>
            <Carousel.Caption>
            <Link 
            className="link carousel__caption mb-4"
            to="/contact"
          >
            {english ? "Contáctanos para saber mas!" : "Contact us to know more!" }
          </Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <SecondSlide/>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <ThirdSlide/>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
