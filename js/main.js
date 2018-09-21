//Главный слайдер
$(window).on('load', function (){
$('.main-slider-carousel').owlCarousel({
      nav: true,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      slideSpeed: 2000,
      paginationSpeed: 4400,
      items: 1,
       loop: true,
      dots: true,
      center: false,
      mouseDrag: false,
      navText: ["<img src='img/left-arrow.png'>", "<img src='img/right-arrow.png'>"],
      navClass: ['owl-prev', 'owl-next'],

      autoplay: true,
      autoplayTimeout:3000

  });
});


// ТАБЫ 
$(".tabs-content__item").not(":first").hide();
$(".tabs .tabs-list__item").click(function() {
  $(".tabs .tabs-list__item").removeClass("active").eq($(this).index()).addClass("active");
  $(".tabs-content__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



/*  Dropdown menu animation
/* ------------------------------------ */
$('.main-nav ul.sub-menu').hide();
$('.main-nav li').hover( 
	function() {
		$(this).children('ul.sub-menu').slideDown('fast');
	}, 
	function() {
		$(this).children('ul.sub-menu').hide();
	}
);



// popups 
$(".footer_callback").click(function (p) {
    p.preventDefault();
    $('#footer_callback-form').arcticmodal();
});


// popup menu

$(function() {
      function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
      };
      function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
        $('body').toggleClass('fixed');
      };
      init()
    });
    
    // подменю мобильные
$(document).ready(function() {
  //прикрепляем клик по заголовкам 
    $('.nav-item__mobile-link').on('click', f_acc);
});
function f_acc(){
//отменяем действие по умолчанию
event.preventDefault();
//скрываем все кроме того, что должны открыть
  $('.nav__item .nav__sub-list').not($(this).next()).slideUp(300);

// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(300);
}

