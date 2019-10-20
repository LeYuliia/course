$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(".hamburger-menu__icon").toggleClass("animate");
        $(".hamburger-menu__icon").toggleClass("white");
        $(".nav-menu__list").toggleClass("display-f");
        $(".page-header").toggleClass("page-header__background");
    });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".page-header");
      var $headerLink = $(".list-item__link");
      var $hamburger = $(".hamburger-menu__icon");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $headerLink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $hamburger.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    });
  });