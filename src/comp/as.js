import React from 'react'
import { Carousel } from 'react-bootstrap'
const As = () => {
  return (
    <div>
        <section className="banner__slider">
        <Carousel>
  <Carousel.Item>
    <img
      className="full-image animated"
      src="./images/banner-new.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className="tess" data-delay-in="0.8">Immigration</h1>
       <h2 className="temm">Consulting2</h2>
          <h3 className="temm">Business</h3>
          <p  className="temm">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="full-image animated"
      src="./images/banner-new.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className="tess" data-delay-in="0.8">Immigration</h1>
       <h2 className="temm">Consulting2</h2>
          <h3 className="temm">Business</h3>
          <p  className="temm">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="full-image animated"
      src="./images/banner-new.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="tess" data-delay-in="0.8">Immigration</h1>
       <h2 className="temm">Consulting2</h2>
          <h3 className="temm">Business</h3>
          <p  className="temm">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>
    </div>
  )
}

export default As