import React from 'react'
import {Carousel} from "react-bootstrap"
import {Animated} from "react-animated-css"
const Exp = () => {
  
  return (
    <div>
         <div className="slide">
   
   <div className="slide__img">
      <Carousel>
  <Carousel.Item>
    <img
      className="size"
      src="asset/img/about-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3><Animated animationIn="w3-container w3-center w3-animate-left tess" isVisible={true}className="animated top-title tess" data-delay-in="0.8">Immigration</Animated></h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

      <i class="fa-solid fa-arrow-right-long"></i>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="size"
      src="asset/img/about-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3><h3><Animated animationIn="w3-container w3-center w3-animate-right tess" isVisible={true}className="animated top-title tess" data-delay-in="0.8">Immigration</Animated></h3></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="size"
      src="asset/img/about-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><Animated animationIn="w3-container w3-center w3-animate-bottom tess" isVisible={true}className="animated text-uppercase tess">Business1</Animated></h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>   
      </div>
</div>
  )
}

export default Exp