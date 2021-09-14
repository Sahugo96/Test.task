$(function (params) {
  
  // Меню
  $('.menu__link').on('click', function () {
    $('.menu__btn--active').next().slideToggle(300);
    $('.menu__btn--active').removeClass('menu__btn--active');
  });

  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
    $(this).next().slideToggle();
    $('.menu__btn.menu__btn--active').not(this).next().slideToggle(300);
    $('.menu__btn.menu__btn--active').not(this).removeClass('menu__btn--active');
  })

  $('.product-slider').slick({
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

});