import './bootstrap.min.css';
import './slick.min.css';
import './animate.min.css';
import './demo.css';
import $ from 'jquery';
import './slick.min.js';
import "./slick-animation.min.js"


$(document).ready(function ($) {
$('.slider').slick({
      autoplay: true,
      speed: 800,
      lazyLoad: 'progressive',
      arrows: false,
      dots: true,
    }).slickAnimation();
  
 
 
});	


