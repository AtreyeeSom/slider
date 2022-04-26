import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const Owldemo = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
  return (
    <div>
        <div class='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
            <div class="col-sm-12 btn btn-info">      
            Owl Carousel with Auto Play Property In React Application   
            </div>      
            </div>  
        </div>  
        <div class='container-fluid' >   
          <OwlCarousel items={3} margin={8} autoplay ={true} >  
        <div ><img  className="img" src= {'asset/img/about-1.jpg'}/></div>  
           <div><img  className="img" src= {'asset/img/about-2.jpg'}/></div>  
           <div><img  className="img" src= {'asset/img/about-3.jpg'}/></div>  
           <div><img  className="img" src= {'asset/img/blog-1.jpg'}/></div>  
           <div><img className="img" src= {'asset/img/blog-2.jpg'}/></div>  
           <div><img className="img" src= {'asset/img/blog-3.jpg'}/></div>  
           <div><img className="img" src= {'asset/img/blog-1.jpg'}/></div>  
      </OwlCarousel>  
      </div> 
      <div>
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
          <img  className="img" src='asset/img/about-1.jpg'/>
          </div>
          <div>
          <img  className="img" src='asset/img/about-2.jpg'/>
          </div>
          <div>
          <img  className="img" src='asset/img/about-3.jpg'/>
          </div>
          <div>
          <img  className="img" src='asset/img/about-1.jpg'/>
          </div>
          <div>
          <img  className="img" src='asset/img/blog-1.jpg'/>
          </div>
          <div>
          <img  className="img" src='asset/img/blog-2.jpg'/>
          </div>
          <div>
          <img  className="img" src='asset/img/blog-3.jpg'/>
          </div>
         
        </Slider>
      </div>
    </div>
  )
}

export default Owldemo