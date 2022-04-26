import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./auto.css"
const Sauto = () => {
    const slideImages = [
        {
          url: 'asset/img/about-1.jpg',
          caption: 'Slide 1'
        }
      ];
    
  return (
    <div>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}} className="poo">
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default Sauto