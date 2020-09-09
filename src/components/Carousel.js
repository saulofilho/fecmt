import React from "react"
import Slider from "react-slick"
import './Carousel.css'
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
    variableWidth: true
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
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Nobres})`
              }}
              alt="foto da chapada dos Nobres"
            >
            </div>
          </div>
          <div>
            <div
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${Pantanal})`
              }}
              alt="foto da chapada dos Pantanal"
            >
            </div>
          </div>
        </Slider>
    </section>
  )
}

export default Carousel
