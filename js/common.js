$(document).ready(function() {
	var amount = $('.slider-item').length;
	var number = 0;

setInterval(function(){
  $('.slider-item')
		.removeAttr('style')
		.removeClass('slider-item-active');
	if (number == amount ) {
  	number = 0;
  }
  number++;
  	$('.slider-item:nth-of-type('+ number + ')').css({ 
		backgroundImage: 'url(../img/header-' + number +'.jpg', zIndex: number}).addClass('slider-item-active active');
		$('#nav-slider-' + number).prop('checked',true);
		$('.slider-item').removeClass('active');
}, 2500);

});
