import React from "react"
import Slider from "react-slick";
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="carousel-wrapper">
        <Slider {...settings}>
          <div>
            <div className="car-items-wrapper red">
              red
            </div>
          </div>
          <div>
            <div className="car-items-wrapper blue">
              blue
            </div>
          </div>
        </Slider>
    </section>
  )
}

export default Carousel
