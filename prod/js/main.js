// (function($, undefined) {
    
// })(jQwery);


$(document).ready(function() {

// For Tabs
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


//Плавная прокрутка к определённой секции по клику на меню навигации
	$('.menu__list').on('click', '.menu__link', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;


		$('html, body').animate({
			scrollTop: distance
		}, 500);
		
		$('.menu__link.active').removeClass('active');
		$(this).addClass('active');

		if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}

	});
	// Конец Плавная прокрутка

});// Конец document.ready

//Инициализация плагина Slick
$('.slider-brands').slick({
	prevArrow: '<button type="button" class="slick-prev slick-prev-brands"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',	
  nextArrow: '<button type="button" class="slick-next slick-next-brands"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // arrows: false
      }
    }
  ]

});
//Конец Инициализация плагина Slick

// == For responsive MENU == 
var $topMenu = $('#main-menu');

$('#show_menu').on('click', function () {	
	 if ($topMenu.hasClass('open') ) {
	 		$topMenu.removeClass('open');
	 		$(this).removeClass('open');
	 }
	 else{
	 		$topMenu.addClass('open');
	 		$(this).addClass('open');
	 }
});

$(window).resize(function(){
	if ($(window).width() > 768) {
		$topMenu.removeClass('animation')
			      .removeClass('open');
		$('#show_menu').removeClass('open');
	}
	else {
		$topMenu.addClass('animation');
	}
});