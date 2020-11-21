$(document).ready(function(){
  $('#bulletDIV').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 300,
    asNavFor: '#carouselDIV'
  });
  $('#callDIV').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 300,
    asNavFor: '#carouselDIV'
  });
  $('#titleDIV').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 300,
    asNavFor: '#carouselDIV'
  });
  $('#carouselDIV').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    asNavFor: '#titleDIV, #callDIV, #bulletDIV',
    speed: 300,
    prevArrow: $('#prevDIV'),
    nextArrow: $('#nextDIV')
  });
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('#carouselDIV').slick('slickGoTo', slideno - 1);
});
