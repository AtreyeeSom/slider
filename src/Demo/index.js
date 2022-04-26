import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom'

export const Demo = function() {
    return(
      <header>
  <div className="slider stick-dots">
    <div className="slide">
      <div className="slide__img">
        <img src="" alt="" data-lazy="http://alexandrebuffet.fr/codepen/images/full/nature_01.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content">
        <div className="slide__content--headings">
           <h2 className="animated" data-animation-in="fadeInUp">Slide me to the moon</h2>
           <p className="animated" data-animation-in="fadeInUp" data-delay-in="0.3">With awesome animations</p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__img">
        <img src="" alt="" data-lazy="http://alexandrebuffet.fr/codepen/images/full/nature_02.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content">
        <div className="slide__content--headings">
           <h2 className="animated" data-animation-in="fadeInRight">Slide me to the moon</h2>
           <p className="animated" data-animation-in="fadeInRight" data-delay-in="0.2">With awesome animations</p>
        </div>
      </div>
    </div>
  </div>
</header>


    )
}