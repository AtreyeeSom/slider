import React, { Component } from "react";
import Slider from "react-slick";

import { Animated } from "react-animated-css";
export default class Another extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <section className="banner__slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="slide">
      <div className="slide__img">
        <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content slide__content__right ">
        <div className="slide__content--headings ">
        <article> <Animated animationIn="w3-container w3-center w3-animate-left  animated top-title tess" isVisible={true}className="animated top-title tess" data-delay-in="0.8">Immigration</Animated></article>
        
        <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting1 </Animated></h2>
           <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business1</Animated></h3>
           <p><Animated animationIn="w3-container w3-center w3-animate-left" isVisible={true}className="animated text-uppercase temm">Aenean imperdiet. Etiam ultricies nisi 
             vel augue. Curabitur ullamcorper...</Animated></p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__img">
        <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content slide__content__right ">
        <div className="slide__content--headings ">
        <article> <Animated animationIn="w3-container w3-center w3-animate-left  animated top-title tess" isVisible={true}className="animated top-title tess" data-delay-in="0.8">Immigration</Animated></article>
        
        <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting1 </Animated></h2>
           <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business1</Animated></h3>
           <p><Animated animationIn="w3-container w3-center w3-animate-left" isVisible={true}className="animated text-uppercase temm">Aenean imperdiet. Etiam ultricies nisi 
             vel augue. Curabitur ullamcorper...</Animated></p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__img">
        <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content slide__content__right ">
        <div className="slide__content--headings ">
        <article> <Animated animationIn="w3-container w3-center w3-animate-left  animated top-title tess" isVisible={true}className="animated top-title tess" data-delay-in="0.8">Immigration</Animated></article>
        
        <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting1 </Animated></h2>
           <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business1</Animated></h3>
           <p><Animated animationIn="w3-container w3-center w3-animate-left" isVisible={true}className="animated text-uppercase temm">Aenean imperdiet. Etiam ultricies nisi 
             vel augue. Curabitur ullamcorper...</Animated></p>
        </div>
      </div>
    </div>
          <div>
          </div>
         </Slider>
         </section>
      </div>
    );
  }
}