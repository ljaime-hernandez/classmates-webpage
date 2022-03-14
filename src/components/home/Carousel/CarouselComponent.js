import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FirstSlide } from './slides/FirstSlide';
import { SecondSlide } from './slides/SecondSlide';

export const CarouselComponent = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;

  return (
    <Carousel variant="dark" className="home__first-page">
        <Carousel.Item>
            <FirstSlide/>
            <Carousel.Caption>
            <Link 
            className="link carousel__caption mb-3"
            to="/contact"
          >
            {english ? "Volver a la página principal" : "Return to home page" }
          </Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <SecondSlide/>
            <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
