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



 $('#portfolio-nav li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');
    // reset the active class on all the buttons
    $('#portfolio-nav li').removeClass('active-items');
    // update the active state on our clicked button
    $(this).parent().addClass('active-items');
    if(ourClass == 'all') {
      // show all our items
      $('#portfolio-items').children('div.item').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('#portfolio-items').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#portfolio-items').children('div.' + ourClass).show();
    }
    return false;
  });


});
