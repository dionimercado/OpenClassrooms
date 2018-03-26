jQuery( function($) {

	// Smooth scrolling
	jQuery('.navbar-nav>li>a').bind('click', function(event) {
		var $anchor = jQuery(this);
		jQuery('html, body').stop().animate({
				scrollTop: (jQuery($anchor.attr('href')).offset().top - 60)
		}, 800, 'easeInOutExpo');
		event.preventDefault();
	});


});
