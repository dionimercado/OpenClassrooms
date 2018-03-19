jQuery( function($) {
	jQuery('.navbar-nav>li>a').bind('click', function(event) {
		var $anchor = jQuery(this);
		jQuery('html, body').stop().animate({
				scrollTop: (jQuery($anchor.attr('href')).offset().top - 0)
		}, 800, 'easeInOutExpo');
		event.preventDefault();
	});


});

class Stadium {
	constructor(name, city, capacity) {
		this.name = name;
		this.city = city;
		this.capacity = capacity;
	}
 
 describeStadium() {
		console.log("the" +" "+ this.name + " " + "is in" +" "+ this.city + " " +"and holds"+" "+ this.capacity +" "+ "fans");
	}
 }
 let Stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000);
 
 Stadium1.describeStadium();