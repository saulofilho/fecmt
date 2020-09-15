import React from "react"
import Slider from "react-slick"
import './Carousel.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Chapada from '../../static/assets/chapada.jpg'
import Nobres from '../../static/assets/nobres.jpg'
import Pantanal from '../../static/assets/pantanal.jpg'

const Carousel = () => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          variableWidth: false,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section className="carousel-wrapper">
        <Slider {...settings}>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Chapada})`
              }}
              alt="foto da chapada dos guimaraes"
            >
            </div>
            <p className="car-text">
            Chapada dos Guimarães
            </p>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Nobres})`
              }}
              alt="foto de Nobres"
            >
            </div>
            <p className="car-text">
            Nobres
            </p>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pantanal})`
              }}
              alt="foto do Pantanal"
            >
            </div>
            <p className="car-text">
            Pantanal
            </p>
          </div>
        </Slider>
    </section>
  )
}

export default Carousel
