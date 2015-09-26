$(window).on('DOMMouseScroll mousewheel', function(e) {
	if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) {

		
		$('body').removeClass('sky').addClass('coffee');

	} else {

		$('body').removeClass('coffee').addClass('sky');

	}
	return false;
});