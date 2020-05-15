$(function(){
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".reviews__arrows-left",
        nextArrow: ".reviews__arrows-right",
        responsive: [
          {
            breakpoint: 1250,
              settings: {
                slidesToShow: 2
              }
          },
          {
            breakpoint: 960,
              settings:{
                slidesToShow: 1
              }
          }
        ]
      });
              
})