$(function () {
    var navbar = $(".header-inner");
    var top_nav = $(".top_nav");
    var logo_1 = $(".logo_1");
    var logo_2 = $(".logo_2");
    $(window).scroll(function () {
      if ($(window).scrollTop() <= 40) {
        top_nav.css("display","block");
        logo_1.css("display","block");
        logo_2.css("display","none");
        navbar.removeClass("navbar-scroll");
      } else {
        top_nav.css("display","none");
        logo_1.css("display","none");
        logo_2.css("display","block");
        navbar.addClass("navbar-scroll");
      }
    });
  });