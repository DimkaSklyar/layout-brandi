$(document).ready(function() {

	var amount = $('.slider-item').length;
	var number = 1;
	var tick = 4000;

var slider = setInterval(function(){
  $('.slider-item').removeClass('slider-item-active');
	if (number == amount ) {
  	number = 0;
		$('.slider-item:not(:nth-of-type(' + amount + '))').removeAttr('style');
		$('.slider-item:nth-of-type(' + amount + ')').css({zIndex: 0});
  }
  number++;
  	$('.slider-item:nth-of-type('+ number + ')')
			.css({
				backgroundImage: 'url(img/header-' + number +'.jpg',
				zIndex: number
			})
			.addClass('slider-item-active');
		$('.slider-item:nth-of-type('+ (number - 1) + ')').css({zIndex: number-1});
		$('#nav-slider-' + number).prop('checked',true);
}, tick);

//stop
// $('label[for="nav-slider-1"]').click(function(){
// 	clearInterval(slider);
// });

var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
var mixer = mixitup(containerEl, {
  selectors: {
    target: '[data-ref~="mixitup-target"]'
  },
	animation: {
        effects: 'fade stagger(100ms)',
        staggerSequence: function(i) {
            return i % 3;
        }
    },
		classNames: {
		block:'portfolio',
        elementFilter: 'control'
    }
});


$('.carousel-features').owlCarousel({
    loop:true,
    margin:25,
    mouseDrag: false,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items:2
        },
        992:{
            items:3
        }
    }
});


$('.custom1').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            items: 1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});


    var touch = $('#touch-menu');
    var menu = $('.nav');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

});
