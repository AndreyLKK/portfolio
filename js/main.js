
$(function () {

  $('.header__link').on('click', function () {
    $('.header__items').toggleClass('header__items--hidden');
    $('.header__items').removeClass('header__items--hidden');
  });


  $(window).on("scroll", function () {
    $('.header__menu').toggleClass("header__menu--active", $(this).scrollTop() > $(window).height());
    var scrolled = $(this).scrollTop();
    if (scrolled >= 200) {
      $('.header__menu').addClass('header__menu--active');
    }
    if (scrolled <= 200) {
      $('.header__menu').removeClass('header__menu--active');
    }

  });


  $('.header__burger').on('click', function () {
    $('.header__items').toggleClass('header__items--active')
    $('.header__line').toggleClass('header__line--active')
    $('.header__burger').toggleClass('header__burger--active')
  });

  $('.header__link').on('click', function () {
    $('.header__items').removeClass('header__items--active')
    $('.header__line').removeClass('header__line--active')
    $('.header__burger').removeClass('header__burger--active')
  });


  $('.header__menu a, .logo, .header__ref').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 570,
      easing: "linear"
    });

    return false;
  });



  var mixer = mixitup('.portfolio__content');

  Fancybox.bind("[data-fancybox]", {
  });
});










