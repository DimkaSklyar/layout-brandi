$(document).ready(function() {

	var amount = $('.slider-item').length;
	var number = 1;
	var tick = 3500;

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
$('label[for="nav-slider-1"]').click(function(){
	clearInterval(slider);
});

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


$('.custom1').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        1000:{
            items:4
        }
    }
});

});
