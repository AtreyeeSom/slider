import React from 'react'
import Slider from "react-slick";
const Experi = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div>
          <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
          <img src='asset/img/about-1.jpg' className="img-fluid w-200"/>
    <i className="fa fa-play-circle-o" ></i>
          </div>
          <div>
          <img src='asset/img/about-2.jpg' className="img-fluid w-200"/>
    <i className="fa fa-play-circle-o" ></i>
          </div>
          <div>
          <img src='asset/img/about-3.jpg' className="img-fluid w-200"/>
    <i className="fa fa-play-circle-o" ></i>
          </div>
          <div>
          <img src='asset/img/blog-1.jpg' className="img-fluid w-200"/>
    <i className="fa fa-play-circle-o" ></i>
          </div>
        </Slider>
    </div>
  )
}

export default Experi