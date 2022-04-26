$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});


$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
  
    prevArrow: '<div class="slick-nav prev-arrow"><img src="images/right-arrow.png"></div>',
    nextArrow: '<div class="slick-nav next-arrow"><img src="images/left-arrow.png"></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});



    $('.immagration-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.help-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        prevArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

